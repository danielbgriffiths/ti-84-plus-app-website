<script lang="ts" setup>
// Local Imports
import InfoHighlight from "~/components/landing/info-highlight.vue";
import FrequentlyAskedQuestion from "~/components/landing/frequently-asked-question.vue";
import { type AppGroup, QuestionSlug } from "~/types";

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

const applicationsTooltip = computed<string>(() =>
  i18n.t("landing.info.highlight.applicationsTooltip", {
    value: props.groups.reduce((acc, group) => (acc += group.size), 0),
  }),
);
const fieldsTooltip = computed<string>(() =>
  i18n.t("landing.info.highlight.fieldsTooltip", {
    value: props.groups.length,
  }),
);
const usersTooltip = computed<string>(() =>
  i18n.t("landing.info.highlight.usersTooltip", { value: 100 }),
);

const questions = computed(
  () =>
    new Map([
      [
        QuestionSlug.HowToUsePythonApplications,
        i18n.t(
          `landing.info.faqQuestions.${QuestionSlug.HowToUsePythonApplications}`,
        ),
      ],
      [
        QuestionSlug.SizeLimitPythonApplications,
        i18n.t(
          `landing.info.faqQuestions.${QuestionSlug.SizeLimitPythonApplications}`,
        ),
      ],
      [
        QuestionSlug.DependenciesPythonApplications,
        i18n.t(
          `landing.info.faqQuestions.${QuestionSlug.DependenciesPythonApplications}`,
        ),
      ],
      [
        QuestionSlug.UploadApplications,
        i18n.t(`landing.info.faqQuestions.${QuestionSlug.UploadApplications}`),
      ],
      [
        QuestionSlug.UseApplicationsInClass,
        i18n.t(
          `landing.info.faqQuestions.${QuestionSlug.UseApplicationsInClass}`,
        ),
      ],
      [
        QuestionSlug.VerifyAccuracyPythonApplications,
        i18n.t(
          `landing.info.faqQuestions.${QuestionSlug.VerifyAccuracyPythonApplications}`,
        ),
      ],
    ]),
);
</script>

<template>
  <div id="info-section" class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        <InfoHighlight
          value="40+"
          :text="$t('landing.info.highlight.applications')"
          :tooltip-text="applicationsTooltip"
        />
        <InfoHighlight
          value="3+"
          :text="$t('landing.info.highlight.fields')"
          :tooltip-text="fieldsTooltip"
        />
        <InfoHighlight
          value="100+"
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
      >
        <p class="cursor-default no-select">hello</p>
      </FrequentlyAskedQuestion>
      <FrequentlyAskedQuestion
        :question="questions.get(QuestionSlug.SizeLimitPythonApplications)!"
        :slug="QuestionSlug.SizeLimitPythonApplications"
      >
        <p class="cursor-default no-select">hello</p>
      </FrequentlyAskedQuestion>
      <FrequentlyAskedQuestion
        :question="questions.get(QuestionSlug.DependenciesPythonApplications)!"
        :slug="QuestionSlug.DependenciesPythonApplications"
      >
        <p class="cursor-default no-select">hello</p>
      </FrequentlyAskedQuestion>
      <FrequentlyAskedQuestion
        :question="questions.get(QuestionSlug.UploadApplications)!"
        :slug="QuestionSlug.UploadApplications"
      >
        <p class="cursor-default no-select">hello</p>
      </FrequentlyAskedQuestion>
      <FrequentlyAskedQuestion
        :question="questions.get(QuestionSlug.UseApplicationsInClass)!"
        :slug="QuestionSlug.UseApplicationsInClass"
      >
        <p class="cursor-default no-select">hello</p>
      </FrequentlyAskedQuestion>
      <FrequentlyAskedQuestion
        :question="
          questions.get(QuestionSlug.VerifyAccuracyPythonApplications)!
        "
        :slug="QuestionSlug.VerifyAccuracyPythonApplications"
      >
        <p class="cursor-default no-select">hello</p>
      </FrequentlyAskedQuestion>
    </div>
  </div>
</template>
