var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Paths_2 = new ol.format.GeoJSON();
var features_Paths_2 = format_Paths_2.readFeatures(json_Paths_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paths_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paths_2.addFeatures(features_Paths_2);
var lyr_Paths_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paths_2, 
                style: style_Paths_2,
                popuplayertitle: "Paths",
                interactive: true,
                title: '<img src="styles/legend/Paths_2.png" /> Paths'
            });
var format_Beacons_3 = new ol.format.GeoJSON();
var features_Beacons_3 = format_Beacons_3.readFeatures(json_Beacons_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beacons_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beacons_3.addFeatures(features_Beacons_3);
var lyr_Beacons_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beacons_3, 
                style: style_Beacons_3,
                popuplayertitle: "Beacons",
                interactive: true,
                title: '<img src="styles/legend/Beacons_3.png" /> Beacons'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Paths_2.setVisible(true);lyr_Beacons_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_Paths_2,lyr_Beacons_3];
lyr_Paths_2.set('fieldAliases', {'Name': 'Name', 'Locality': 'Locality', 'Area': 'Area', });
lyr_Beacons_3.set('fieldAliases', {'ID': 'ID', 'Reg Number': 'Reg Number', 'X': 'X', 'Y': 'Y', });
lyr_Paths_2.set('fieldImages', {'Name': 'TextEdit', 'Locality': 'TextEdit', 'Area': 'TextEdit', });
lyr_Beacons_3.set('fieldImages', {'ID': 'Range', 'Reg Number': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Paths_2.set('fieldLabels', {'Name': 'header label - always visible', 'Locality': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_Beacons_3.set('fieldLabels', {'ID': 'inline label - visible with data', 'Reg Number': 'header label - always visible', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', });
lyr_Beacons_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});