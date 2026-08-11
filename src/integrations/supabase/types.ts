export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      book_copies: {
        Row: {
          active: boolean
          asset_code: string
          book_id: string
          condition: string
          created_at: string
          id: string
          location: string
          notes: string
          status: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          asset_code: string
          book_id: string
          condition?: string
          created_at?: string
          id?: string
          location?: string
          notes?: string
          status?: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          asset_code?: string
          book_id?: string
          condition?: string
          created_at?: string
          id?: string
          location?: string
          notes?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "book_copies_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
        ]
      }
      books: {
        Row: {
          active: boolean
          author: string
          available_copies: number
          category_id: string | null
          collection: boolean
          created_at: string
          id: string
          legacy_id: string | null
          level: string
          publisher: string
          synopsis: string
          title: string
          total_copies: number
          updated_at: string
        }
        Insert: {
          active?: boolean
          author?: string
          available_copies?: number
          category_id?: string | null
          collection?: boolean
          created_at?: string
          id?: string
          legacy_id?: string | null
          level?: string
          publisher?: string
          synopsis?: string
          title: string
          total_copies?: number
          updated_at?: string
        }
        Update: {
          active?: boolean
          author?: string
          available_copies?: number
          category_id?: string | null
          collection?: boolean
          created_at?: string
          id?: string
          legacy_id?: string | null
          level?: string
          publisher?: string
          synopsis?: string
          title?: string
          total_copies?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "books_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          active: boolean
          created_at: string
          icon: string
          id: string
          is_system: boolean
          name: string
          slug: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          icon?: string
          id?: string
          is_system?: boolean
          name: string
          slug: string
        }
        Update: {
          active?: boolean
          created_at?: string
          icon?: string
          id?: string
          is_system?: boolean
          name?: string
          slug?: string
        }
        Relationships: []
      }
      loans: {
        Row: {
          book_id: string
          copy_id: string | null
          created_at: string
          due_date: string
          id: string
          loan_date: string
          registered_by: string | null
          reservation_id: string | null
          returned_at: string | null
          status: Database["public"]["Enums"]["loan_status"]
          updated_at: string
          user_id: string | null
        }
        Insert: {
          book_id: string
          copy_id?: string | null
          created_at?: string
          due_date?: string
          id?: string
          loan_date?: string
          registered_by?: string | null
          reservation_id?: string | null
          returned_at?: string | null
          status?: Database["public"]["Enums"]["loan_status"]
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          book_id?: string
          copy_id?: string | null
          created_at?: string
          due_date?: string
          id?: string
          loan_date?: string
          registered_by?: string | null
          reservation_id?: string | null
          returned_at?: string | null
          status?: Database["public"]["Enums"]["loan_status"]
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "loans_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "loans_copy_id_fkey"
            columns: ["copy_id"]
            isOneToOne: false
            referencedRelation: "book_copies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "loans_reservation_id_fkey"
            columns: ["reservation_id"]
            isOneToOne: false
            referencedRelation: "reservations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "loans_user_id_profiles_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          active: boolean
          created_at: string
          email: string
          full_name: string
          grade: string | null
          id: string
          matricula: string | null
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          email?: string
          full_name?: string
          grade?: string | null
          id: string
          matricula?: string | null
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          email?: string
          full_name?: string
          grade?: string | null
          id?: string
          matricula?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      reservations: {
        Row: {
          book_id: string
          created_at: string
          id: string
          notes: string | null
          queue_position: number | null
          status: Database["public"]["Enums"]["reservation_status"]
          updated_at: string
          user_id: string | null
        }
        Insert: {
          book_id: string
          created_at?: string
          id?: string
          notes?: string | null
          queue_position?: number | null
          status?: Database["public"]["Enums"]["reservation_status"]
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          book_id?: string
          created_at?: string
          id?: string
          notes?: string | null
          queue_position?: number | null
          status?: Database["public"]["Enums"]["reservation_status"]
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reservations_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reservations_user_id_profiles_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          book_id: string
          comment: string
          created_at: string
          id: string
          rating: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          book_id: string
          comment?: string
          created_at?: string
          id?: string
          rating: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          book_id?: string
          comment?: string
          created_at?: string
          id?: string
          rating?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_user_id_profiles_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      system_settings: {
        Row: {
          key: string
          updated_at: string
          value: string
        }
        Insert: {
          key: string
          updated_at?: string
          value: string
        }
        Update: {
          key?: string
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      reviews_public: {
        Row: {
          book_id: string | null
          comment: string | null
          created_at: string | null
          id: string | null
          rating: number | null
        }
        Insert: {
          book_id?: string | null
          comment?: string | null
          created_at?: string | null
          id?: string | null
          rating?: number | null
        }
        Update: {
          book_id?: string | null
          comment?: string | null
          created_at?: string | null
          id?: string | null
          rating?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      add_book_copies: {
        Args: {
          _asset_code?: string
          _book_id: string
          _condition?: string
          _location?: string
          _notes?: string
          _quantity?: number
        }
        Returns: {
          active: boolean
          asset_code: string
          book_id: string
          condition: string
          created_at: string
          id: string
          location: string
          notes: string
          status: string
          updated_at: string
        }[]
        SetofOptions: {
          from: "*"
          to: "book_copies"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      admin_list_reviews: {
        Args: { _limit?: number }
        Returns: {
          book_author: string
          book_title: string
          comment: string
          created_at: string
          id: string
          rating: number
          reviewer_email: string
          reviewer_name: string
        }[]
      }
      delete_category_reassign: { Args: { _id: string }; Returns: undefined }
      get_my_review_id: { Args: { _book_id: string }; Returns: string }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_staff: { Args: { _user_id: string }; Returns: boolean }
      library_maintenance: { Args: never; Returns: Json }
      list_my_reviews: {
        Args: never
        Returns: {
          book_author: string
          book_id: string
          book_title: string
          comment: string
          created_at: string
          id: string
          rating: number
        }[]
      }
      next_asset_code: { Args: never; Returns: string }
      register_checkout: {
        Args: { _copy_id: string; _reservation_id?: string; _user_id: string }
        Returns: string
      }
      register_return: {
        Args: { _copy_status?: string; _loan_id: string }
        Returns: undefined
      }
      sync_book_availability: { Args: { _book_id: string }; Returns: undefined }
      write_off_copy: {
        Args: { _copy_id: string; _notes?: string }
        Returns: undefined
      }
    }
    Enums: {
      app_role: "aluno" | "professor" | "bibliotecario" | "admin"
      loan_status: "ativo" | "devolvido" | "atrasado" | "perdido"
      reservation_status:
        | "pendente"
        | "aprovada"
        | "disponivel"
        | "concluida"
        | "cancelada"
        | "expirada"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["aluno", "professor", "bibliotecario", "admin"],
      loan_status: ["ativo", "devolvido", "atrasado", "perdido"],
      reservation_status: [
        "pendente",
        "aprovada",
        "disponivel",
        "concluida",
        "cancelada",
        "expirada",
      ],
    },
  },
} as const
