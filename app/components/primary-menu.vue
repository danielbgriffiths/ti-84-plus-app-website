<!--<script setup lang="ts">-->
<!--// Third Party Imports-->
<!--import type { MenuItem } from "primevue/menuitem";-->

<!--//-->
<!--// State-->
<!--//-->

<!--const items = ref<MenuItem[]>([-->
<!--  {-->
<!--    label: "Home",-->
<!--    icon: "pi pi-fw pi-home",-->
<!--    target: "/",-->
<!--  },-->
<!--  {-->
<!--    label: "Python Scripts",-->
<!--    icon: "pi pi-fw pi-home",-->
<!--    items: [-->
<!--      {-->
<!--        label: "Pre Calculus",-->
<!--        icon: "pi pi-fw pi-home",-->
<!--        target: "/scripts/pre_calculus",-->
<!--        items: [-->
<!--          {-->
<!--            label: "Least Common Multiple",-->
<!--            icon: "pi pi-fw pi-home",-->
<!--            target: "/scripts/pre_calculus/least_common_multiple",-->
<!--          },-->
<!--          {-->
<!--            label: "Greatest Common Divisor",-->
<!--            icon: "pi pi-fw pi-home",-->
<!--            target: "/scripts/pre_calculus/greatest_common_divisor",-->
<!--          },-->
<!--        ],-->
<!--      },-->
<!--      {-->
<!--        label: "Trigonometry",-->
<!--        icon: "pi pi-fw pi-home",-->
<!--        target: "/scripts/trigonometry",-->
<!--      },-->
<!--      {-->
<!--        label: "Calculus",-->
<!--        icon: "pi pi-fw pi-home",-->
<!--        target: "/scripts/calculus",-->
<!--      },-->
<!--    ],-->
<!--  },-->
<!--  {-->
<!--    label: "Compiler",-->
<!--    icon: "pi pi-fw pi-home",-->
<!--    target: "/compiler",-->
<!--  },-->
<!--  {-->
<!--    label: "Donate",-->
<!--    icon: "pi pi-fw pi-home",-->
<!--    target: "/donate",-->
<!--  },-->
<!--]);-->
<!--</script>-->

<template>
  <!--  <Menubar :model="items">-->
  <!--    <template #start>-->
  <!--      <img style="width: 40px; height: 40px" src="/img.png" />-->
  <!--    </template>-->
  <!--    <template #item="{ item, props, hasSubmenu, root }">-->
  <!--      <a v-bind="props.action">-->
  <!--        <span v-if="item.icon" :class="item.icon" />-->
  <!--        <span class="ml-2">{{ item.label }}</span>-->
  <!--        <i-->
  <!--          v-if="hasSubmenu"-->
  <!--          :class="[-->
  <!--            'pi pi-angle-down',-->
  <!--            { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root },-->
  <!--          ]"-->
  <!--        />-->
  <!--      </a>-->
  <!--    </template>-->
  <!--    <template #end>-->
  <!--      <div>-->
  <!--        <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" />-->
  <!--      </div>-->
  <!--    </template>-->
  <!--  </Menubar>-->
</template>
