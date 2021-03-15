export default {
  methods: {
    downloadPublication: function(filename) {
      const downloadLink = `https://webapi.aidspan.org/api/v1/` + 'fileget/' + filename;
      const link = document.createElement("a");
      link.href = downloadLink;
      link.setAttribute("download", link);
      document.body.appendChild(link);
      link.click();
    },
  },
};
