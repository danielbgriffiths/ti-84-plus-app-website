<script lang="ts" setup>
// Local Imports
import InfoHighlight from "~/components/landing/info-highlight.vue";
import FrequentlyAskedQuestion from "~/components/landing/frequently-asked-question.vue";
import { type AppGroup, QuestionSlug } from "~/types";
import { getFrequentlyAskedQuestions } from "~/constants";

interface Props {
  groups: AppGroup[];
}

//
// Setup
//

const props = defineProps<Props>();
const i18n = useI18n();

//
// State
//

const totalApplications = computed<number>(() =>
  props.groups.reduce((acc, group) => (acc += group.size), 0),
);
const totalGroups = computed<number>(() => props.groups.length);
const totalUsers = computed<number>(() => 100);
const applicationsTooltip = computed<string>(() =>
  i18n.t("landing.info.highlight.applicationsTooltip", {
    value: totalApplications.value,
  }),
);
const fieldsTooltip = computed<string>(() =>
  i18n.t("landing.info.highlight.fieldsTooltip", {
    value: totalGroups.value,
  }),
);
const usersTooltip = computed<string>(() =>
  i18n.t("landing.info.highlight.usersTooltip", { value: totalUsers.value }),
);

const questions = computed(() => getFrequentlyAskedQuestions(i18n.t));
</script>

<template>
  <div id="info-section" class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        <InfoHighlight
          :value="`${totalApplications}+`"
          :text="$t('landing.info.highlight.applications')"
          :tooltip-text="applicationsTooltip"
        />
        <InfoHighlight
          :value="`${totalGroups}+`"
          :text="$t('landing.info.highlight.fields')"
          :tooltip-text="fieldsTooltip"
        />
        <InfoHighlight
          :value="`${totalUsers}+`"
          :text="$t('landing.info.highlight.users')"
          :tooltip-text="usersTooltip"
        />
      </div>
    </div>

    <div class="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mb-16">
        <h2
          class="text-4xl text-center font-bold tracking-tight text-neutral-700 sm:text-6xl no-select cursor-default"
        >
          {{ $t("landing.info.faqTitle") }}
        </h2>
      </div>

      <FrequentlyAskedQuestion
        :question="questions.get(QuestionSlug.HowToUsePythonApplications)!"
        :slug="QuestionSlug.HowToUsePythonApplications"
      />
      <FrequentlyAskedQuestion
        :question="questions.get(QuestionSlug.SizeLimitPythonApplications)!"
        :slug="QuestionSlug.SizeLimitPythonApplications"
      />
      <FrequentlyAskedQuestion
        :question="questions.get(QuestionSlug.DependenciesPythonApplications)!"
        :slug="QuestionSlug.DependenciesPythonApplications"
      />
      <FrequentlyAskedQuestion
        :question="questions.get(QuestionSlug.UploadApplications)!"
        :slug="QuestionSlug.UploadApplications"
      />
      <FrequentlyAskedQuestion
        :question="questions.get(QuestionSlug.UseApplicationsInClass)!"
        :slug="QuestionSlug.UseApplicationsInClass"
      />
      <FrequentlyAskedQuestion
        :question="
          questions.get(QuestionSlug.VerifyAccuracyPythonApplications)!
        "
        :slug="QuestionSlug.VerifyAccuracyPythonApplications"
      />
    </div>
  </div>
</template>
