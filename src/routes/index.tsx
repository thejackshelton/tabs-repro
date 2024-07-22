import type { DocumentHead } from "@builder.io/qwik-city";
import { component$, type PropsOf } from "@builder.io/qwik";
import { Tabs } from "@qwik-ui/headless";

export default component$(() => {
  return (
    <Tabs.Root>
      <Tabs.List>
        <Tabs.Tab>
          <ChevronIcon />
        </Tabs.Tab>
        <Tabs.Tab>Tab 2</Tabs.Tab>
        <Tabs.Tab>Tab 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel>Panel 1</Tabs.Panel>
      <Tabs.Panel>Panel 2</Tabs.Panel>
      <Tabs.Panel>Panel 3</Tabs.Panel>
    </Tabs.Root>
  );
});

const ChevronIcon = (props: PropsOf<"svg">) => {
  return (
    <svg
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke-width={0.5}
      color=""
      {...props}
    >
      <path
        d="M15.354 0.854021L8.35402 7.85402C8.30758 7.90058 8.2524 7.93753 8.19165 7.96273C8.13091 7.98794 8.06579 8.00092 8.00002 8.00092C7.93425 8.00092 7.86913 7.98794 7.80839 7.96273C7.74764 7.93753 7.69247 7.90058 7.64602 7.85402L0.646021 0.854021C0.552135 0.760134 0.49939 0.632797 0.49939 0.500021C0.49939 0.367245 0.552135 0.239908 0.646021 0.146021C0.739908 0.0521343 0.867246 -0.000610349 1.00002 -0.000610352C1.1328 -0.000610354 1.26013 0.0521343 1.35402 0.146021L8.00002 6.79302L14.646 0.146021C14.7399 0.0521343 14.8672 -0.000610354 15 -0.000610352C15.1328 -0.000610349 15.2601 0.0521343 15.354 0.146021C15.4479 0.239908 15.5007 0.367245 15.5007 0.500021C15.5007 0.632797 15.4479 0.760134 15.354 0.854021Z"
        fill=""
      />
    </svg>
  );
};

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
