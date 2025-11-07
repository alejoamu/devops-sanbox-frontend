import { Home, FileText, HelpCircle, Search, GraduationCap, Brain, Cpu, ChevronDown } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { guides } from "@/data/guidesData";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const navigation = [
  { title: "Inicio", url: "/", icon: Home },
  { title: "Buscar", url: "/search", icon: Search },
];

const resources = [
  { title: "Recursos", url: "/resources", icon: FileText },
  { title: "FAQ", url: "/faq", icon: HelpCircle },
];

const getGuideIcon = (iconName: string) => {
  switch (iconName) {
    case "Brain":
      return Brain;
    case "Cpu":
      return Cpu;
    default:
      return GraduationCap;
  }
};

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
        {/* Navigation */}
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

        {/* Guides with collapsible phases */}
        {guides.map((guide) => {
          const GuideIcon = getGuideIcon(guide.icon);
          return (
            <Collapsible key={guide.id} defaultOpen className="group/collapsible">
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger className="flex w-full items-center justify-between hover:bg-sidebar-accent rounded-md px-2 py-1.5 transition-colors">
                    <div className="flex items-center gap-2">
                      <GuideIcon className="h-4 w-4" />
                      <span>{guide.name}</span>
                    </div>
                    <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuSub>
                        {guide.phases.map((phase, index) => (
                          <SidebarMenuSubItem key={phase.id}>
                            <SidebarMenuSubButton asChild>
                              <NavLink
                                to={`/${guide.id}/${phase.id}`}
                                className="hover:bg-sidebar-accent pl-8"
                                activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                              >
                                <span className="text-xs text-muted-foreground mr-2">
                                  {index + 1}
                                </span>
                                <span>{phase.title}</span>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          );
        })}

        {/* Resources */}
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
