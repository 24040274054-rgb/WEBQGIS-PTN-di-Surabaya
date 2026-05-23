ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([682747.560329, 9187656.528720, 699581.639365, 9198357.077872]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_Aksebilitas_2 = new ol.format.GeoJSON();
var features_Aksebilitas_2 = format_Aksebilitas_2.readFeatures(json_Aksebilitas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Aksebilitas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aksebilitas_2.addFeatures(features_Aksebilitas_2);
var lyr_Aksebilitas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aksebilitas_2, 
                style: style_Aksebilitas_2,
                popuplayertitle: 'Aksebilitas',
                interactive: true,
    title: 'Aksebilitas<br />\
    <img src="styles/legend/Aksebilitas_2_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/Aksebilitas_2_1.png" /> 2,4km (30 menit)<br />' });
var format_PTNdiSurabaya_3 = new ol.format.GeoJSON();
var features_PTNdiSurabaya_3 = format_PTNdiSurabaya_3.readFeatures(json_PTNdiSurabaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PTNdiSurabaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNdiSurabaya_3.addFeatures(features_PTNdiSurabaya_3);
var lyr_PTNdiSurabaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNdiSurabaya_3, 
                style: style_PTNdiSurabaya_3,
                popuplayertitle: 'PTN di Surabaya',
                interactive: true,
    title: 'PTN di Surabaya<br />\
    <img src="styles/legend/PTNdiSurabaya_3_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNdiSurabaya_3_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNdiSurabaya_3_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNdiSurabaya_3_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNdiSurabaya_3_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNdiSurabaya_3_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNdiSurabaya_3_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNdiSurabaya_3_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNdiSurabaya_3_8.png" /> UPNV Jatim<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_Aksebilitas_2.setVisible(true);lyr_PTNdiSurabaya_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleLabels_1,lyr_Aksebilitas_2,lyr_PTNdiSurabaya_3];
lyr_Aksebilitas_2.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTNdiSurabaya_3.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Rangking QS WUR': 'Rangking QS WUR', 'Tahun Berdiri ': 'Tahun Berdiri ', 'Fakultas': 'Fakultas', 'Foto': 'Foto', });
lyr_Aksebilitas_2.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTNdiSurabaya_3.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Rangking QS WUR': 'TextEdit', 'Tahun Berdiri ': 'Range', 'Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Aksebilitas_2.set('fieldLabels', {'fid': 'no label', 'Access': 'no label', });
lyr_PTNdiSurabaya_3.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'Rangking QS WUR': 'no label', 'Tahun Berdiri ': 'no label', 'Fakultas': 'no label', 'Foto': 'no label', });
lyr_PTNdiSurabaya_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});