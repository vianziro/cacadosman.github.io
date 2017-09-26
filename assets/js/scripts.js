Vue.component('home', {
  template: '#home-template'
});

Vue.component('skills', {
  template: '#skills-template',
  props: ["props"]
});

var app = new Vue({
  el: '#app',
  data: {
    currentView: "home",
    obj : {
      academics: [
        "SD Al-Kautsar B.Lampung",
        "SMPN 1 Bandar Lampung",
        "SMA Kebangsaan Lampung Selatan",
        "S1 Ilmu Komputer UGM"
      ],
      organizations : [
        {header: "OSIS SMA Kebangsaan (2014-2015)", description: "Head of IT Division."},
        {header: "OmahTI UGM (2016-Now)", description: "Members of Information Systems Division.<br>Members of Public Relationships Departement."}
      ],
      languages : [
        {label: "PHP", progress: "70%", color: "red"},
        {label: "Javascript", progress: "30%", color: "blue"},
        {label: "Python", progress: "40%", color: "green"},
        {label: "Java", progress: "25%", color: "yellow"},
        {label: "SQL", progress: "50%", color: "purple"},
        {label: "C/C++", progress: "15%", color: "pink"}
      ],
      frameworks : [
        "Laravel", "Materialize CSS", "Bootstrap", "VueJS", "JQuery"
      ],
      events : [
        "OmahTI Learning Center", "JOINTS UGM", "Crayon UGM", "Makrab Ilkom UGM"
      ]
    }
  },
  methods : {
    aboutMe: function(e){
      alert("Coming soon :(");
    }
  }
});
