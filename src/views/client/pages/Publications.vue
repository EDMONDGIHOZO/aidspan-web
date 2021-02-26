<template>
  <div class="container">
    <h3>publicationsgma</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "title",
          align: "start",
          value: "title",
          groupable: false,
        },
        { text: "Category", value: "category", align: "right" },
        { text: "published at", value: "published_at", align: "right" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          category: "Ice cream",
          dairy: "Yes",
        },
        {
          name: "Ice cream sandwich",
          category: "Ice cream",
          dairy: "Yes",
        },
        {
          name: "Eclair",
          category: "Cookie",
          dairy: "Yes",
        },
        {
          name: "Cupcake",
          category: "Pastry",
          dairy: "Yes",
        },
        {
          name: "Gingerbread",
          category: "Cookie",
          dairy: "No",
        },
        {
          name: "Jelly bean",
          category: "Candy",
          dairy: "No",
        },
        {
          name: "Lollipop",
          category: "Candy",
          dairy: "No",
        },
        {
          name: "Honeycomb",
          category: "Toffee",
          dairy: "No",
        },
        {
          name: "Donut",
          category: "Pastry",
          dairy: "Yes",
        },
        {
          name: "KitKat",
          category: "Candy",
          dairy: "Yes",
        },
      ],
    };
  },
};
</script>