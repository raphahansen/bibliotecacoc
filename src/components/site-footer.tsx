import { Clock, Mail, MapPin, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo-novomundo-coc.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-8 bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="inline-flex items-center rounded-2xl bg-background px-4 py-3">
            <img
              src={logo.url}
              alt="Colégio Novomundo · Plataforma de Educação COC"
              className="h-12 w-auto"
            />
          </div>
          <div className="mt-4 leading-tight">
            <span className="block font-display text-lg">Biblioteca COC Novomundo</span>
            <span className="block text-[0.7rem] uppercase tracking-[0.18em] text-primary-foreground/70">
              Profª Vera Massis
            </span>
          </div>

          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Um espaço de leitura, pesquisa e encontro para toda a comunidade escolar.
            Acervo físico e digital em constante crescimento.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base text-gold-soft">Horário de funcionamento</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0 text-gold" /> Seg a Sex · 09h30 – 10h50
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0 text-gold" /> Sábado · 08h00 – 12h00
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0 text-gold" /> Domingo · Fechado
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-gold-soft">Contato</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0 text-gold" /> Av. das Letras, 120 · Novo Mundo
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-gold" /> (41) 3333-1200
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-gold" /> biblioteca@cocnovomundo.edu.br
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-gold-soft">Redes sociais</h3>
          <div className="mt-4 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid size-10 place-items-center rounded-full border border-primary-foreground/20 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-xs text-primary-foreground/55">
            Siga para conhecer as novidades do acervo e os clubes de leitura.
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 px-4 py-5 text-center text-xs text-primary-foreground/55 lg:px-8">
        © {new Date().getFullYear()} Biblioteca COC Novomundo · Todos os direitos reservados.
      </div>
    </footer>
  );
}
