// Local Imports
import type {
  ApplicationMeta,
  GroupName,
  UseApplicationMetaApiBindings,
} from "~/types";

export default function (
  group: GroupName,
  name: string,
): UseApplicationMetaApiBindings {
  //
  // Constants
  //

  const BASE_URI = "/api/application-meta";

  //
  // State
  //

  const data = ref<ApplicationMeta | undefined>();

  //
  // Functions
  //

  async function getApplicationMeta(): Promise<void> {
    const {
      data: nextData,
      pending,
      error,
      refresh,
      clear,
    } = await useFetch<ApplicationMeta>(
      `/api/application-meta/${group}/${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    data.value = nextData.value ?? undefined;
  }

  async function updateViews(): Promise<void> {
    const {
      data: nextData,
      pending,
      error,
      refresh,
      clear,
    } = await useFetch<ApplicationMeta>(`${BASE_URI}/${group}/${name}/views`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    data.value = nextData.value ?? undefined;
  }

  async function updateDownloads(): Promise<void> {
    const {
      data: nextData,
      pending,
      error,
      refresh,
      clear,
    } = await useFetch<ApplicationMeta>(
      `${BASE_URI}/${group}/${name}/downloads`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    data.value = nextData.value ?? undefined;
  }

  async function updateRatings(rating: number): Promise<void> {
    const {
      data: nextData,
      pending,
      error,
      refresh,
      clear,
    } = await useFetch<ApplicationMeta>(
      `${BASE_URI}/${group}/${name}/ratings`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating }),
      },
    );

    data.value = nextData.value ?? undefined;
  }

  return {
    data,

    getApplicationMeta,
    updateViews,
    updateDownloads,
    updateRatings,
  };
}
