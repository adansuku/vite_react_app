export interface DevDashConfig {
	github_access_token: string;
	widgets: {
		id: string;
		repository_url: string;
	}[];
}

export const config: DevDashConfig = {
	github_access_token: process.env.REACT_APP_GITHUB_ACCESS_TOKEN as string,
	widgets: [
		{
			id: "a17557bd-55a5-482b-b344-0114e43ca560",
			repository_url: "url",
		},
		{
			id: "79bedada-05e1-4e37-886a-c3e894a85bc7",
			repository_url: "url",
		},
		{
			id: "50589970-a43d-4255-b7fd-e1059b860a2a",
			repository_url: "url",
		},
	],
};