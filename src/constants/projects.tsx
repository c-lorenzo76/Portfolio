import { ProjectCard } from "@/components/portfolio/project-card";

export const projects = [
    {
        title: "Veto",
        value: "food",
        content: (
            <ProjectCard
                title="Veto"
                bullets={[
                    "An interactive poll application to help a group of people with deciding where to eat by giving personalized recommendations",
                    "Authored and directed a Claude Code multi-agent workflow to build features, with human review before every commit",
                    "Established real-time voting functionality using WebSocket connections, allowing all users to view live updates on poll results",
                    "Integrated the Google Place API to provide location recommendations based on user preferences and poll results",
                ]}
                stack={["React", "Express", "Tailwind CSS", "Azure", "GCP"]}
                links={[
                    { label: "Repo", href: "https://github.com/c-lorenzo76/Veto", icon: "github" },
                    { label: "Website", href: "https://mango-coast-0e9d5880f.7.azurestaticapps.net", icon: "website" },
                ]}
            />
        )
    },
    {
        title: "Spotify Pomodoro",
        value: "pomodoro",
        content: (
            <ProjectCard
                title="Spotify Pomodoro"
                bullets={[
                    "A single-page Pomodoro technique application to enhance focus and productivity of users",
                    "Integrated Spotify OAuth authentication, enabling users to access and play playlists directly from the application",
                    "Followed Spotify's Authorization Code with PKCE flow to securely handle user authentication with industry practice",
                ]}
                stack={["Angular", "Tailwind CSS", "Spotify Web API"]}
                links={[
                    { label: "Repo", href: "https://github.com/c-lorenzo76/pomodoro-spotify", icon: "github" },
                ]}
            />
        )
    },
    {
        title: "Remodeling",
        value: "remodel",
        content: (
            <ProjectCard
                title="Remodeling"
                bullets={[
                    "Designed a website for a company using Figma for design, increasing customer engagement through a user-friendly interface",
                    "Streamlined collection and management of potential clients' information during quote requests",
                    "Implemented cloud infrastructure and deployment guidelines, CI/CD workflows to ensure updates to production environments",
                ]}
                stack={["React", "Go", "Tailwind CSS", "AWS", "MySQL"]}
                links={[
                    { label: "Repo", href: "https://github.com/c-lorenzo76/remodeling-co", icon: "github" },
                ]}
            />
        )
    },
]
