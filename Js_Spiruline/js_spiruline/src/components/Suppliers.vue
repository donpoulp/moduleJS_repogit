<template>
    <tr>
        <td>{{name}}</td>
        <td v-if="status" class="statusClass" :class="{textGreen:status}">
            {{status}}
        </td>
        <td v-else class="statusClass" :class="{textRed:!status}">
            {{status}}
        </td>
        <td>{{formatDate(checkedAt)}}</td>
    </tr>
</template>

<script>
import { format } from 'timeago.js'
export default {
  name: "Supplier",

  props: [
      'name',
      'status',
      'checkedAt',
      'supplier'
  ],
  methods: {

    formatDate(date){
      return format(date)
    }
  }
}
</script>

<style>
.textRed{
color: red;
}
.textGreen{
    color: green;
}
.statusClass{
    border: 1px solid;
}
</style>

