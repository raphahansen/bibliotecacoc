import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import type { AppRole, DbProfile } from "@/lib/library";

type AuthState = {
  loading: boolean;
  session: Session | null;
  user: User | null;
  profile: DbProfile | null;
  roles: AppRole[];
  role: AppRole | null;
  isStaff: boolean;
  isAdmin: boolean;
  refresh: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthState | null>(null);

const rank: AppRole[] = ["aluno", "professor", "bibliotecario", "admin"];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<DbProfile | null>(null);
  const [roles, setRoles] = useState<AppRole[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUserData = async (userId: string | undefined) => {
    if (!userId) {
      setProfile(null);
      setRoles([]);
      return;
    }
    const [profileRes, rolesRes] = await Promise.all([
      supabase
        .from("profiles")
        .select("id, full_name, email, matricula, grade, active, created_at")
        .eq("id", userId)
        .maybeSingle(),
      supabase.from("user_roles").select("role").eq("user_id", userId),
    ]);
    setProfile((profileRes.data as DbProfile | null) ?? null);
    setRoles(((rolesRes.data ?? []) as { role: AppRole }[]).map((r) => r.role));
  };

  useEffect(() => {
    let active = true;

    const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
      if (!active) return;
      setSession(next);
      void loadUserData(next?.user?.id).finally(() => setLoading(false));
    });

    void supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSession(data.session);
      void loadUserData(data.session?.user?.id).finally(() => setLoading(false));
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const value = useMemo<AuthState>(() => {
    const sorted = [...roles].sort((a, b) => rank.indexOf(b) - rank.indexOf(a));
    const role = sorted[0] ?? null;
    return {
      loading,
      session,
      user: session?.user ?? null,
      profile,
      roles,
      role,
      isStaff: roles.includes("bibliotecario") || roles.includes("admin"),
      isAdmin: roles.includes("admin"),
      refresh: async () => {
        await loadUserData(session?.user?.id);
      },
      signOut: async () => {
        await supabase.auth.signOut();
        setProfile(null);
        setRoles([]);
      },
    };
  }, [loading, session, profile, roles]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth precisa estar dentro de AuthProvider");
  return ctx;
}
