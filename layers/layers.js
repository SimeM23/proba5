var wms_layers = [];

var format_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0 = new ol.format.GeoJSON();
var features_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0 = format_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0.readFeatures(json_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0.addFeatures(features_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0);
var lyr_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0, 
                style: style_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0,
                interactive: true,
                title: '<img src="styles/legend/Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0.png" /> Na_velikim_i_malim_ekranima__Tocke_GEOJSON'
            });

lyr_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0.setVisible(true);
var layersList = [lyr_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0];
lyr_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0.set('fieldAliases', {'Regija': 'Regija', 'Lokacija': 'Lokacija', 'x': 'x', 'y': 'y', 'Napomena': 'Napomena', 'Opis': 'Opis', });
lyr_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0.set('fieldImages', {'Regija': 'TextEdit', 'Lokacija': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Napomena': 'TextEdit', 'Opis': 'TextEdit', });
lyr_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0.set('fieldLabels', {'Regija': 'no label', 'Lokacija': 'no label', 'x': 'no label', 'y': 'no label', 'Napomena': 'no label', 'Opis': 'no label', });
lyr_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});