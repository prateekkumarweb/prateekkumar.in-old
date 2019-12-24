<template>
  <ul>
    <li>
      <PublicationItem
        title="Open-WBO-Inc: Approximation Strategies for Incomplete Weighted MaxSAT"
        :authors="['Saurabh Joshi', 'Prateek Kumar', 'Sukrut Rao', 'Ruben Martins']"
        conf="JSAT 2019 (vol. 11)"
        pdf="https://content.iospress.com/download/journal-on-satisfiability-boolean-modeling-and-computation/sat190118?id=journal-on-satisfiability-boolean-modeling-and-computation%2Fsat190118"
      />
    </li>
    <li>
      <PublicationItem
        title="An analysis of executable size reduction by LLVM passes"
        :authors="['Shalini Jain', 'Utpal Bora', 'Prateek Kumar', 'Vaibhav B. Sinha', 'Suresh Purini', 'Ramakrishna Upadrasta']"
        conf="CSIT 2019"
        pdf="https://link.springer.com/article/10.1007%2Fs40012-019-00248-5"
      />
    </li>
    <li>
      <PublicationItem
        title="Approximation Strategies for Incomplete MaxSAT"
        :authors="['Saurabh Joshi', 'Prateek Kumar', 'Ruben Martins', 'Sukrut Rao']"
        conf="CP 2018"
        pdf="https://link.springer.com/content/pdf/10.1007/978-3-319-98334-9_15.pdf"
      />
    </li>
  </ul>
</template>

<style scoped>
li {
  padding: 0.5rem 0;
}
</style>

<script>
import PublicationItem from "~/components/home/PublicationItem";

export default {
  components: {
    PublicationItem
  }
};
</script>
