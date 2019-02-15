<template>
  <div>
    <p>ID: {{$route.params.id}}</p>
    <ul>
      <li>id: {{messageDetail.id}}</li>
      <li>title: {{messageDetail.title}}</li>
      <li>content: {{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>
  // const allMessageDetails = [
  //   {id: 1, title: 'message 001', content: 'message 001 content...'},
  //   {id: 2, title: 'message 002', content: 'message 002 content...'},
  //   {id: 3, title: 'message 003', content: 'message 003 content...'}
  // ];
  export default {
    data() {
      return {
        messageDetail: {}
      }
    },

    mounted() {
      setTimeout(() => {
        const allMessageDetails = [
          {id: 1, title: 'message 001', content: 'message 001 content...'},
          {id: 2, title: 'message 002', content: 'message 002 content...'},
          {id: 3, title: 'message 003', content: 'message 003 content...'}
        ];

        this.allMessageDetails = allMessageDetails;
        const id = this.$route.params.id * 1;
        this.messageDetail = allMessageDetails.find(detail => detail.id === id);
      }, 1000);
    },

    watch: {
      $route: function (value) { // 路由路径(param)发生了改变
        const id = value.params.id * 1;
        this.messageDetail = this.allMessageDetails.find(detail => detail.id === id);
      }
    }
  }
</script>

<style scoped>

</style>
