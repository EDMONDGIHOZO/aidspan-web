<template>
  <v-row>
    <v-col cols="9">
      <div class="chartboard" ref="chartboard"></div>
      <v-card height="180" max-width="330" class="dynamicLegend elevation-17">
        <v-card-title>
          Dynamic Legend
        </v-card-title>
      </v-card>
    </v-col>

    <v-col cols="3">
      <v-card id="legendContainer" flat>
        <v-card-title>
          <p class="blue--text font-weight-black">LEGENDS</p>
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="legend in legends" :key="legend.rating">
              <v-chip
                class="ma-2"
                :color="legend.color"
                label
                text-color="white"
              >
                <v-avatar left>
                  <span class="white--text font-weight-black">
                    {{ legend.rating }}
                  </span>
                </v-avatar>
                {{ legend.title }}
              </v-chip>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
/// import the amchart components
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
//import * as am4geodata_data_countries2 from "@amcharts/amcharts4-geodata/data/countries2";
///import the chart theme
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
///import the mapworld
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
am4core.useTheme(am4themes_animated);
//import axios for data fetching
import { mapState } from 'vuex';
///end of importing ----///

export default {
  data() {
    return {
      ratinggroups: [
        { groupName: "Exceeds expectations", color: "#2F0459" },
        { groupName: "Good performance", color: "#5C12A6" },
        { groupName: "Meets expectations", color: "#7F25D9" },
        { groupName: "Adequate", color: "#F2E205" },
        { groupName: "Inadequate but potential", color: "#D98E04" },
        { groupName: "C Unacceptable", color: "#F9DB49" },
      ],
      legends: [
        { title: "Exceeds Expectations", color: "#FC5E02", rating: "A1" },
        { title: "Good performance", color: "#FA9E03", rating: "A" },
        { title: "Adequate", color: "#FDDB6D", rating: "B1" },
        {
          title: "Inadequate but potential demonstrated",
          color: "#195ECA",
          rating: "B2",
        },
        { title: "Unacceptable", color: "#1CBFD8", rating: "C" },
        { title: "Not available", color: "#1D7ED4", rating: "N/A" },
      ],
      defaultColor: "#1D7ED4",
    };
  },

  mounted() {
    //import the data
    this.$store.dispatch('loadCountries');
    let mapboard = am4core.create(this.$refs.chartboard, am4maps.MapChart);
    mapboard.geodata = am4geodata_worldLow;
    mapboard.projection = new am4maps.projections.Miller();
    mapboard.panBehavior = "move";
    mapboard.padding(20, 20, 20, 20);
    mapboard.zoomControl = new am4maps.ZoomControl();

    let worldSeries = mapboard.series.push(new am4maps.MapPolygonSeries());
    worldSeries.useGeodata = true;
    worldSeries.calculateVisualCenter = true;
    //get the interface colors
    worldSeries.geodata = am4geodata_worldLow;
    worldSeries.exclude = ["AQ"];

    var polygonTemplate = worldSeries.mapPolygons.template;
    polygonTemplate.fill = am4core.color(this.defaultColor);
    polygonTemplate.strokeOpacity = 0.8;
    polygonTemplate.stroke = am4core.color ('#1CBFD8');
    polygonTemplate.propertyFields.id = "id";
    polygonTemplate.events.on("over", function(event) {
      if (event.target.dummyData) {
        event.target.dummyData.isHover = false;
      }
    });

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fillOpacity = 1;
    hs.properties.fill = am4core.color("#0367A6");

    //i dont know this
    var measelsSeries = mapboard.series.push(new am4maps.MapPolygonSeries());
    measelsSeries.tooltip.background.fillOpacity = 0.4;
    measelsSeries.tooltip.background.cornerRadius = 20;
    measelsSeries.tooltip.autoTextColor = false;
    measelsSeries.tooltip.label.fill = am4core.color("#FFFFFF");
    measelsSeries.tooltip.dy = -5;

    var measelTemplate = measelsSeries.mapPolygons.template;
    measelTemplate.fill = am4core.color("#FA9E03");
    measelTemplate.strokeOpacity = 0;
    measelTemplate.fillOpacity = 0.3;
    measelTemplate.tooltipPosition = "fixed";

    var hs2 = measelsSeries.mapPolygons.template.states.create("hover");
    hs2.properties.fillOpacity = 1;
    hs2.properties.fill = am4core.color("#86240c");

    ///decrale the data
    let data = this.countrydata;

    worldSeries.events.on("inited", function() {
      worldSeries.mapPolygons.each(function(mapPolygon) {

        var grant = data[mapPolygon.id];

        if (grant > 0) {
          var polygon = measelsSeries.mapPolygons.create();
          polygon.multiPolygon = am4maps.getCircle(
            mapPolygon.visualLongitude,
            mapPolygon.visualLatitude,
            1
          );
          polygon.tooltipText = grant;

          mapPolygon.dummyData = polygon;

          polygon.events.on("over", function() {
            mapPolygon.isHover = true;
          });
          polygon.events.on("out", function() {
            mapPolygon.isHover = false;
          });
        } else {
          mapPolygon.tooltipText =
            mapPolygon.dataItem.dataContext.name + ": no data";
          mapPolygon.fill = am4core.color("#FC5E02");
        }
      });
    });
  },
  computed: {
    ...mapState([
      'Countries'
    ])
  },

  beforeDestroy() {
    if (this.map) {
      this.map.dispose();
    }
  },
};
</script>

<style lang="scss" scoped>
.chartboard {
  width: 100%;
  height: 508px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  overflow: hidden;
  background: #1cbfd8;
  border-radius: 17px;
}

.dynamicLegend {
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  margin-top: -6%;

}
</style>
