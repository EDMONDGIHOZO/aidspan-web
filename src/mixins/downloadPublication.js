export default {
  methods: {
    downloadPublication: function(filename) {
      const downloadLink = this.$hostname + 'fileget/' + filename;
      const link = document.createElement("a");
      link.href = downloadLink;
      link.setAttribute("download", link);
      document.body.appendChild(link);
      link.click();
    },
  },
};
