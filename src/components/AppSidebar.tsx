import { Home, BookOpen, FileText, HelpCircle, Search, GraduationCap } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const navigation = [
  { title: "Inicio", url: "/", icon: Home },
  { title: "Buscar", url: "/search", icon: Search },
];

const pdg1Phases = [
  { title: "Fase 1: Definición", url: "/pdg1/fase1", icon: BookOpen },
  { title: "Fase 2: Marco Teórico", url: "/pdg1/fase2", icon: BookOpen },
  { title: "Fase 3: Metodología", url: "/pdg1/fase3", icon: BookOpen },
];

const pdg2Phases = [
  { title: "Fase 4: Implementación", url: "/pdg2/fase4", icon: BookOpen },
  { title: "Fase 5: Análisis", url: "/pdg2/fase5", icon: BookOpen },
  { title: "Fase 6: Conclusiones", url: "/pdg2/fase6", icon: BookOpen },
];

const resources = [
  { title: "Recursos", url: "/resources", icon: FileText },
  { title: "FAQ", url: "/faq", icon: HelpCircle },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-sidebar-primary" />
          <span className="font-semibold text-sidebar-foreground">Guía PDG Icesi</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Proyecto de Grado I</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pdg1Phases.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className="hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Proyecto de Grado II</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pdg2Phases.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className="hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {resources.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className="hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
