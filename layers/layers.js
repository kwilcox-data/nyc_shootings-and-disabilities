var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MedianHouseholdIncome_1 = new ol.format.GeoJSON();
var features_MedianHouseholdIncome_1 = format_MedianHouseholdIncome_1.readFeatures(json_MedianHouseholdIncome_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MedianHouseholdIncome_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MedianHouseholdIncome_1.addFeatures(features_MedianHouseholdIncome_1);
var lyr_MedianHouseholdIncome_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MedianHouseholdIncome_1, 
                style: style_MedianHouseholdIncome_1,
                popuplayertitle: "Median Household Income",
                interactive: true,
    title: 'Median Household Income<br />\
    <img src="styles/legend/MedianHouseholdIncome_1_0.png" /> $0 - $32,321<br />\
    <img src="styles/legend/MedianHouseholdIncome_1_1.png" /> $32,322 - $64,961<br />\
    <img src="styles/legend/MedianHouseholdIncome_1_2.png" /> $64,962 - $98,828<br />\
    <img src="styles/legend/MedianHouseholdIncome_1_3.png" /> $98,829 - $151,667<br />\
    <img src="styles/legend/MedianHouseholdIncome_1_4.png" /> $151,668 - $250,001<br />'
        });
var format_UnemploymentRate_2 = new ol.format.GeoJSON();
var features_UnemploymentRate_2 = format_UnemploymentRate_2.readFeatures(json_UnemploymentRate_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnemploymentRate_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnemploymentRate_2.addFeatures(features_UnemploymentRate_2);
var lyr_UnemploymentRate_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnemploymentRate_2, 
                style: style_UnemploymentRate_2,
                popuplayertitle: "Unemployment Rate",
                interactive: true,
    title: 'Unemployment Rate<br />\
    <img src="styles/legend/UnemploymentRate_2_0.png" /> 0 - 4<br />\
    <img src="styles/legend/UnemploymentRate_2_1.png" /> 5 - 9<br />\
    <img src="styles/legend/UnemploymentRate_2_2.png" /> 10 - 15<br />\
    <img src="styles/legend/UnemploymentRate_2_3.png" /> 16 - 28<br />\
    <img src="styles/legend/UnemploymentRate_2_4.png" /> 29 - 60<br />'
        });
var format_PovertyRate_3 = new ol.format.GeoJSON();
var features_PovertyRate_3 = format_PovertyRate_3.readFeatures(json_PovertyRate_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PovertyRate_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PovertyRate_3.addFeatures(features_PovertyRate_3);
var lyr_PovertyRate_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PovertyRate_3, 
                style: style_PovertyRate_3,
                popuplayertitle: "Poverty Rate",
                interactive: true,
    title: 'Poverty Rate<br />\
    <img src="styles/legend/PovertyRate_3_0.png" /> 0 - 9<br />\
    <img src="styles/legend/PovertyRate_3_1.png" /> 10 - 19<br />\
    <img src="styles/legend/PovertyRate_3_2.png" /> 20 - 32<br />\
    <img src="styles/legend/PovertyRate_3_3.png" /> 33 - 58<br />\
    <img src="styles/legend/PovertyRate_3_4.png" /> 59 - 100<br />'
        });
var format_HispanicPopulation_4 = new ol.format.GeoJSON();
var features_HispanicPopulation_4 = format_HispanicPopulation_4.readFeatures(json_HispanicPopulation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HispanicPopulation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HispanicPopulation_4.addFeatures(features_HispanicPopulation_4);
var lyr_HispanicPopulation_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HispanicPopulation_4, 
                style: style_HispanicPopulation_4,
                popuplayertitle: "Hispanic Population",
                interactive: true,
    title: 'Hispanic Population<br />\
    <img src="styles/legend/HispanicPopulation_4_0.png" /> 0 - 13<br />\
    <img src="styles/legend/HispanicPopulation_4_1.png" /> 14 - 30<br />\
    <img src="styles/legend/HispanicPopulation_4_2.png" /> 31 - 49<br />\
    <img src="styles/legend/HispanicPopulation_4_3.png" /> 50 - 68<br />\
    <img src="styles/legend/HispanicPopulation_4_4.png" /> 69 - 96<br />'
        });
var format_NonHispanicWhitePopulation_5 = new ol.format.GeoJSON();
var features_NonHispanicWhitePopulation_5 = format_NonHispanicWhitePopulation_5.readFeatures(json_NonHispanicWhitePopulation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NonHispanicWhitePopulation_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NonHispanicWhitePopulation_5.addFeatures(features_NonHispanicWhitePopulation_5);
var lyr_NonHispanicWhitePopulation_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NonHispanicWhitePopulation_5, 
                style: style_NonHispanicWhitePopulation_5,
                popuplayertitle: "Non-Hispanic White Population",
                interactive: true,
    title: 'Non-Hispanic White Population<br />\
    <img src="styles/legend/NonHispanicWhitePopulation_5_0.png" /> 0 - 11<br />\
    <img src="styles/legend/NonHispanicWhitePopulation_5_1.png" /> 12 - 30<br />\
    <img src="styles/legend/NonHispanicWhitePopulation_5_2.png" /> 31 - 50<br />\
    <img src="styles/legend/NonHispanicWhitePopulation_5_3.png" /> 51 - 71<br />\
    <img src="styles/legend/NonHispanicWhitePopulation_5_4.png" /> 72 - 100<br />'
        });
var format_NonHispanicBlackPopulation_6 = new ol.format.GeoJSON();
var features_NonHispanicBlackPopulation_6 = format_NonHispanicBlackPopulation_6.readFeatures(json_NonHispanicBlackPopulation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NonHispanicBlackPopulation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NonHispanicBlackPopulation_6.addFeatures(features_NonHispanicBlackPopulation_6);
var lyr_NonHispanicBlackPopulation_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NonHispanicBlackPopulation_6, 
                style: style_NonHispanicBlackPopulation_6,
                popuplayertitle: "Non-Hispanic Black Population",
                interactive: true,
    title: 'Non-Hispanic Black Population<br />\
    <img src="styles/legend/NonHispanicBlackPopulation_6_0.png" /> 0 - 8<br />\
    <img src="styles/legend/NonHispanicBlackPopulation_6_1.png" /> 9 - 23<br />\
    <img src="styles/legend/NonHispanicBlackPopulation_6_2.png" /> 24 - 45<br />\
    <img src="styles/legend/NonHispanicBlackPopulation_6_3.png" /> 46 - 69<br />\
    <img src="styles/legend/NonHispanicBlackPopulation_6_4.png" /> 70 - 97<br />'
        });
var format_SelfCareDifficultyMales18to34_7 = new ol.format.GeoJSON();
var features_SelfCareDifficultyMales18to34_7 = format_SelfCareDifficultyMales18to34_7.readFeatures(json_SelfCareDifficultyMales18to34_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SelfCareDifficultyMales18to34_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SelfCareDifficultyMales18to34_7.addFeatures(features_SelfCareDifficultyMales18to34_7);
var lyr_SelfCareDifficultyMales18to34_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SelfCareDifficultyMales18to34_7, 
                style: style_SelfCareDifficultyMales18to34_7,
                popuplayertitle: "Self-Care Difficulty (Males - 18 to 34)",
                interactive: true,
    title: 'Self-Care Difficulty (Males - 18 to 34)<br />\
    <img src="styles/legend/SelfCareDifficultyMales18to34_7_0.png" /> 0<br />\
    <img src="styles/legend/SelfCareDifficultyMales18to34_7_1.png" /> 1 - 5<br />\
    <img src="styles/legend/SelfCareDifficultyMales18to34_7_2.png" /> 6 - 11<br />\
    <img src="styles/legend/SelfCareDifficultyMales18to34_7_3.png" /> 12 - 26<br />\
    <img src="styles/legend/SelfCareDifficultyMales18to34_7_4.png" /> 27 - 50<br />'
        });
var format_IndependentLivingDifficultyMales18to34_8 = new ol.format.GeoJSON();
var features_IndependentLivingDifficultyMales18to34_8 = format_IndependentLivingDifficultyMales18to34_8.readFeatures(json_IndependentLivingDifficultyMales18to34_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndependentLivingDifficultyMales18to34_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndependentLivingDifficultyMales18to34_8.addFeatures(features_IndependentLivingDifficultyMales18to34_8);
var lyr_IndependentLivingDifficultyMales18to34_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndependentLivingDifficultyMales18to34_8, 
                style: style_IndependentLivingDifficultyMales18to34_8,
                popuplayertitle: "Independent Living Difficulty (Males - 18 to 34)",
                interactive: true,
    title: 'Independent Living Difficulty (Males - 18 to 34)<br />\
    <img src="styles/legend/IndependentLivingDifficultyMales18to34_8_0.png" /> 0 - 3<br />\
    <img src="styles/legend/IndependentLivingDifficultyMales18to34_8_1.png" /> 4 - 10<br />\
    <img src="styles/legend/IndependentLivingDifficultyMales18to34_8_2.png" /> 11 - 23<br />\
    <img src="styles/legend/IndependentLivingDifficultyMales18to34_8_3.png" /> 24 - 50<br />\
    <img src="styles/legend/IndependentLivingDifficultyMales18to34_8_4.png" /> 51 - 100<br />'
        });
var format_CognitiveDifficultyMales18to34_9 = new ol.format.GeoJSON();
var features_CognitiveDifficultyMales18to34_9 = format_CognitiveDifficultyMales18to34_9.readFeatures(json_CognitiveDifficultyMales18to34_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CognitiveDifficultyMales18to34_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CognitiveDifficultyMales18to34_9.addFeatures(features_CognitiveDifficultyMales18to34_9);
var lyr_CognitiveDifficultyMales18to34_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CognitiveDifficultyMales18to34_9, 
                style: style_CognitiveDifficultyMales18to34_9,
                popuplayertitle: "Cognitive Difficulty (Males - 18 to 34)",
                interactive: true,
    title: 'Cognitive Difficulty (Males - 18 to 34)<br />\
    <img src="styles/legend/CognitiveDifficultyMales18to34_9_0.png" /> 0 - 3<br />\
    <img src="styles/legend/CognitiveDifficultyMales18to34_9_1.png" /> 4 - 11<br />\
    <img src="styles/legend/CognitiveDifficultyMales18to34_9_2.png" /> 12 - 23<br />\
    <img src="styles/legend/CognitiveDifficultyMales18to34_9_3.png" /> 24 - 53<br />\
    <img src="styles/legend/CognitiveDifficultyMales18to34_9_4.png" /> 54 - 100<br />'
        });
var format_AmbulatoryDifficultyMales18to34_10 = new ol.format.GeoJSON();
var features_AmbulatoryDifficultyMales18to34_10 = format_AmbulatoryDifficultyMales18to34_10.readFeatures(json_AmbulatoryDifficultyMales18to34_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmbulatoryDifficultyMales18to34_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmbulatoryDifficultyMales18to34_10.addFeatures(features_AmbulatoryDifficultyMales18to34_10);
var lyr_AmbulatoryDifficultyMales18to34_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmbulatoryDifficultyMales18to34_10, 
                style: style_AmbulatoryDifficultyMales18to34_10,
                popuplayertitle: "Ambulatory Difficulty (Males - 18 to 34)",
                interactive: true,
    title: 'Ambulatory Difficulty (Males - 18 to 34)<br />\
    <img src="styles/legend/AmbulatoryDifficultyMales18to34_10_0.png" /> 0<br />\
    <img src="styles/legend/AmbulatoryDifficultyMales18to34_10_1.png" /> 1 - 5<br />\
    <img src="styles/legend/AmbulatoryDifficultyMales18to34_10_2.png" /> 6- 11<br />\
    <img src="styles/legend/AmbulatoryDifficultyMales18to34_10_3.png" /> 12 - 24<br />\
    <img src="styles/legend/AmbulatoryDifficultyMales18to34_10_4.png" /> 25 - 50<br />'
        });
var format_NYCShootings20182022_11 = new ol.format.GeoJSON();
var features_NYCShootings20182022_11 = format_NYCShootings20182022_11.readFeatures(json_NYCShootings20182022_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NYCShootings20182022_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NYCShootings20182022_11.addFeatures(features_NYCShootings20182022_11);
var lyr_NYCShootings20182022_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NYCShootings20182022_11, 
                style: style_NYCShootings20182022_11,
                popuplayertitle: "NYC Shootings (2018-2022)",
                interactive: true,
    title: 'NYC Shootings (2018-2022)<br />\
    <img src="styles/legend/NYCShootings20182022_11_0.png" /> Non-fatal<br />\
    <img src="styles/legend/NYCShootings20182022_11_1.png" /> Fatal<br />\
    <img src="styles/legend/NYCShootings20182022_11_2.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_MedianHouseholdIncome_1.setVisible(false);lyr_UnemploymentRate_2.setVisible(false);lyr_PovertyRate_3.setVisible(false);lyr_HispanicPopulation_4.setVisible(false);lyr_NonHispanicWhitePopulation_5.setVisible(false);lyr_NonHispanicBlackPopulation_6.setVisible(true);lyr_SelfCareDifficultyMales18to34_7.setVisible(false);lyr_IndependentLivingDifficultyMales18to34_8.setVisible(false);lyr_CognitiveDifficultyMales18to34_9.setVisible(false);lyr_AmbulatoryDifficultyMales18to34_10.setVisible(false);lyr_NYCShootings20182022_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MedianHouseholdIncome_1,lyr_UnemploymentRate_2,lyr_PovertyRate_3,lyr_HispanicPopulation_4,lyr_NonHispanicWhitePopulation_5,lyr_NonHispanicBlackPopulation_6,lyr_SelfCareDifficultyMales18to34_7,lyr_IndependentLivingDifficultyMales18to34_8,lyr_CognitiveDifficultyMales18to34_9,lyr_AmbulatoryDifficultyMales18to34_10,lyr_NYCShootings20182022_11];
lyr_MedianHouseholdIncome_1.set('fieldAliases', {'CTLabel': 'CTLabel', 'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'CT2020': 'CT2020', 'BoroCT2020': 'BoroCT2020', 'CDEligibil': 'CDEligibil', 'NTAName': 'NTAName', 'NTA2020': 'NTA2020', 'CDTA2020': 'CDTA2020', 'CDTANAME': 'CDTANAME', 'GEOID': 'GEOID', 'PUMA': 'PUMA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ctlabel_2v': 'ctlabel_2v', 'ctlabel_do': 'ctlabel_do', 'Tract_csv': 'Tract_csv', 'Tract': 'Tract', 'Tract_Merg': 'Tract_Merg', 'ambulatory': 'ambulatory', 'cognitive_': 'cognitive_', 'independen': 'independen', 'selfcare_d': 'selfcare_d', 'nhblack_pc': 'nhblack_pc', 'nhwhite_pc': 'nhwhite_pc', 'hispanic_p': 'hispanic_p', 'medianhhin': 'medianhhin', 'poverty_pc': 'poverty_pc', 'unemployme': 'unemployme', });
lyr_UnemploymentRate_2.set('fieldAliases', {'CTLabel': 'CTLabel', 'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'CT2020': 'CT2020', 'BoroCT2020': 'BoroCT2020', 'CDEligibil': 'CDEligibil', 'NTAName': 'NTAName', 'NTA2020': 'NTA2020', 'CDTA2020': 'CDTA2020', 'CDTANAME': 'CDTANAME', 'GEOID': 'GEOID', 'PUMA': 'PUMA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ctlabel_2v': 'ctlabel_2v', 'ctlabel_do': 'ctlabel_do', 'Tract_csv': 'Tract_csv', 'Tract': 'Tract', 'Tract_Merg': 'Tract_Merg', 'ambulatory': 'ambulatory', 'cognitive_': 'cognitive_', 'independen': 'independen', 'selfcare_d': 'selfcare_d', 'nhblack_pc': 'nhblack_pc', 'nhwhite_pc': 'nhwhite_pc', 'hispanic_p': 'hispanic_p', 'medianhhin': 'medianhhin', 'poverty_pc': 'poverty_pc', 'unemployme': 'unemployme', });
lyr_PovertyRate_3.set('fieldAliases', {'CTLabel': 'CTLabel', 'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'CT2020': 'CT2020', 'BoroCT2020': 'BoroCT2020', 'CDEligibil': 'CDEligibil', 'NTAName': 'NTAName', 'NTA2020': 'NTA2020', 'CDTA2020': 'CDTA2020', 'CDTANAME': 'CDTANAME', 'GEOID': 'GEOID', 'PUMA': 'PUMA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ctlabel_2v': 'ctlabel_2v', 'ctlabel_do': 'ctlabel_do', 'Tract_csv': 'Tract_csv', 'Tract': 'Tract', 'Tract_Merg': 'Tract_Merg', 'ambulatory': 'ambulatory', 'cognitive_': 'cognitive_', 'independen': 'independen', 'selfcare_d': 'selfcare_d', 'nhblack_pc': 'nhblack_pc', 'nhwhite_pc': 'nhwhite_pc', 'hispanic_p': 'hispanic_p', 'medianhhin': 'medianhhin', 'poverty_pc': 'poverty_pc', 'unemployme': 'unemployme', });
lyr_HispanicPopulation_4.set('fieldAliases', {'CTLabel': 'CTLabel', 'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'CT2020': 'CT2020', 'BoroCT2020': 'BoroCT2020', 'CDEligibil': 'CDEligibil', 'NTAName': 'NTAName', 'NTA2020': 'NTA2020', 'CDTA2020': 'CDTA2020', 'CDTANAME': 'CDTANAME', 'GEOID': 'GEOID', 'PUMA': 'PUMA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ctlabel_2v': 'ctlabel_2v', 'ctlabel_do': 'ctlabel_do', 'Tract_csv': 'Tract_csv', 'Tract': 'Tract', 'Tract_Merg': 'Tract_Merg', 'ambulatory': 'ambulatory', 'cognitive_': 'cognitive_', 'independen': 'independen', 'selfcare_d': 'selfcare_d', 'nhblack_pc': 'nhblack_pc', 'nhwhite_pc': 'nhwhite_pc', 'hispanic_p': 'hispanic_p', 'medianhhin': 'medianhhin', 'poverty_pc': 'poverty_pc', 'unemployme': 'unemployme', });
lyr_NonHispanicWhitePopulation_5.set('fieldAliases', {'CTLabel': 'CTLabel', 'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'CT2020': 'CT2020', 'BoroCT2020': 'BoroCT2020', 'CDEligibil': 'CDEligibil', 'NTAName': 'NTAName', 'NTA2020': 'NTA2020', 'CDTA2020': 'CDTA2020', 'CDTANAME': 'CDTANAME', 'GEOID': 'GEOID', 'PUMA': 'PUMA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ctlabel_2v': 'ctlabel_2v', 'ctlabel_do': 'ctlabel_do', 'Tract_csv': 'Tract_csv', 'Tract': 'Tract', 'Tract_Merg': 'Tract_Merg', 'ambulatory': 'ambulatory', 'cognitive_': 'cognitive_', 'independen': 'independen', 'selfcare_d': 'selfcare_d', 'nhblack_pc': 'nhblack_pc', 'nhwhite_pc': 'nhwhite_pc', 'hispanic_p': 'hispanic_p', 'medianhhin': 'medianhhin', 'poverty_pc': 'poverty_pc', 'unemployme': 'unemployme', });
lyr_NonHispanicBlackPopulation_6.set('fieldAliases', {'CTLabel': 'CTLabel', 'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'CT2020': 'CT2020', 'BoroCT2020': 'BoroCT2020', 'CDEligibil': 'CDEligibil', 'NTAName': 'NTAName', 'NTA2020': 'NTA2020', 'CDTA2020': 'CDTA2020', 'CDTANAME': 'CDTANAME', 'GEOID': 'GEOID', 'PUMA': 'PUMA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ctlabel_2v': 'ctlabel_2v', 'ctlabel_do': 'ctlabel_do', 'Tract_csv': 'Tract_csv', 'Tract': 'Tract', 'Tract_Merg': 'Tract_Merg', 'ambulatory': 'ambulatory', 'cognitive_': 'cognitive_', 'independen': 'independen', 'selfcare_d': 'selfcare_d', 'nhblack_pc': 'nhblack_pc', 'nhwhite_pc': 'nhwhite_pc', 'hispanic_p': 'hispanic_p', 'medianhhin': 'medianhhin', 'poverty_pc': 'poverty_pc', 'unemployme': 'unemployme', });
lyr_SelfCareDifficultyMales18to34_7.set('fieldAliases', {'CTLabel': 'CTLabel', 'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'CT2020': 'CT2020', 'BoroCT2020': 'BoroCT2020', 'CDEligibil': 'CDEligibil', 'NTAName': 'NTAName', 'NTA2020': 'NTA2020', 'CDTA2020': 'CDTA2020', 'CDTANAME': 'CDTANAME', 'GEOID': 'GEOID', 'PUMA': 'PUMA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ctlabel_2v': 'ctlabel_2v', 'ctlabel_do': 'ctlabel_do', 'Tract_csv': 'Tract_csv', 'Tract': 'Tract', 'Tract_Merg': 'Tract_Merg', 'ambulatory': 'ambulatory', 'cognitive_': 'cognitive_', 'independen': 'independen', 'selfcare_d': 'selfcare_d', 'nhblack_pc': 'nhblack_pc', 'nhwhite_pc': 'nhwhite_pc', 'hispanic_p': 'hispanic_p', 'medianhhin': 'medianhhin', 'poverty_pc': 'poverty_pc', 'unemployme': 'unemployme', });
lyr_IndependentLivingDifficultyMales18to34_8.set('fieldAliases', {'CTLabel': 'CTLabel', 'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'CT2020': 'CT2020', 'BoroCT2020': 'BoroCT2020', 'CDEligibil': 'CDEligibil', 'NTAName': 'NTAName', 'NTA2020': 'NTA2020', 'CDTA2020': 'CDTA2020', 'CDTANAME': 'CDTANAME', 'GEOID': 'GEOID', 'PUMA': 'PUMA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ctlabel_2v': 'ctlabel_2v', 'ctlabel_do': 'ctlabel_do', 'Tract_csv': 'Tract_csv', 'Tract': 'Tract', 'Tract_Merg': 'Tract_Merg', 'ambulatory': 'ambulatory', 'cognitive_': 'cognitive_', 'independen': 'independen', 'selfcare_d': 'selfcare_d', 'nhblack_pc': 'nhblack_pc', 'nhwhite_pc': 'nhwhite_pc', 'hispanic_p': 'hispanic_p', 'medianhhin': 'medianhhin', 'poverty_pc': 'poverty_pc', 'unemployme': 'unemployme', });
lyr_CognitiveDifficultyMales18to34_9.set('fieldAliases', {'CTLabel': 'CTLabel', 'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'CT2020': 'CT2020', 'BoroCT2020': 'BoroCT2020', 'CDEligibil': 'CDEligibil', 'NTAName': 'NTAName', 'NTA2020': 'NTA2020', 'CDTA2020': 'CDTA2020', 'CDTANAME': 'CDTANAME', 'GEOID': 'GEOID', 'PUMA': 'PUMA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ctlabel_2v': 'ctlabel_2v', 'ctlabel_do': 'ctlabel_do', 'Tract_csv': 'Tract_csv', 'Tract': 'Tract', 'Tract_Merg': 'Tract_Merg', 'ambulatory': 'ambulatory', 'cognitive_': 'cognitive_', 'independen': 'independen', 'selfcare_d': 'selfcare_d', 'nhblack_pc': 'nhblack_pc', 'nhwhite_pc': 'nhwhite_pc', 'hispanic_p': 'hispanic_p', 'medianhhin': 'medianhhin', 'poverty_pc': 'poverty_pc', 'unemployme': 'unemployme', });
lyr_AmbulatoryDifficultyMales18to34_10.set('fieldAliases', {'CTLabel': 'CTLabel', 'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'CT2020': 'CT2020', 'BoroCT2020': 'BoroCT2020', 'CDEligibil': 'CDEligibil', 'NTAName': 'NTAName', 'NTA2020': 'NTA2020', 'CDTA2020': 'CDTA2020', 'CDTANAME': 'CDTANAME', 'GEOID': 'GEOID', 'PUMA': 'PUMA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ctlabel_2v': 'ctlabel_2v', 'ctlabel_do': 'ctlabel_do', 'Tract_csv': 'Tract_csv', 'Tract': 'Tract', 'Tract_Merg': 'Tract_Merg', 'ambulatory': 'ambulatory', 'cognitive_': 'cognitive_', 'independen': 'independen', 'selfcare_d': 'selfcare_d', 'nhblack_pc': 'nhblack_pc', 'nhwhite_pc': 'nhwhite_pc', 'hispanic_p': 'hispanic_p', 'medianhhin': 'medianhhin', 'poverty_pc': 'poverty_pc', 'unemployme': 'unemployme', });
lyr_NYCShootings20182022_11.set('fieldAliases', {'INCIDENT_K': 'INCIDENT_K', 'OCCUR_DATE': 'OCCUR_DATE', 'OCCUR_TIME': 'OCCUR_TIME', 'BORO': 'BORO', 'LOC_OF_OCC': 'LOC_OF_OCC', 'PRECINCT': 'PRECINCT', 'JURISDICTI': 'JURISDICTI', 'LOC_CLASSF': 'LOC_CLASSF', 'LOCATION_D': 'LOCATION_D', 'STATISTICA': 'STATISTICA', 'PERP_AGE_G': 'PERP_AGE_G', 'PERP_SEX': 'PERP_SEX', 'PERP_RACE': 'PERP_RACE', 'VIC_AGE_GR': 'VIC_AGE_GR', 'VIC_SEX': 'VIC_SEX', 'VIC_RACE': 'VIC_RACE', 'X_COORD_CD': 'X_COORD_CD', 'Y_COORD_CD': 'Y_COORD_CD', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Lon_Lat': 'Lon_Lat', });
lyr_MedianHouseholdIncome_1.set('fieldImages', {'CTLabel': 'TextEdit', 'BoroCode': 'TextEdit', 'BoroName': 'TextEdit', 'CT2020': 'TextEdit', 'BoroCT2020': 'TextEdit', 'CDEligibil': 'TextEdit', 'NTAName': 'TextEdit', 'NTA2020': 'TextEdit', 'CDTA2020': 'TextEdit', 'CDTANAME': 'TextEdit', 'GEOID': 'TextEdit', 'PUMA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ctlabel_2v': 'TextEdit', 'ctlabel_do': 'TextEdit', 'Tract_csv': 'TextEdit', 'Tract': 'TextEdit', 'Tract_Merg': 'TextEdit', 'ambulatory': 'TextEdit', 'cognitive_': 'TextEdit', 'independen': 'TextEdit', 'selfcare_d': 'TextEdit', 'nhblack_pc': 'TextEdit', 'nhwhite_pc': 'TextEdit', 'hispanic_p': 'TextEdit', 'medianhhin': 'TextEdit', 'poverty_pc': 'TextEdit', 'unemployme': 'TextEdit', });
lyr_UnemploymentRate_2.set('fieldImages', {'CTLabel': 'TextEdit', 'BoroCode': 'TextEdit', 'BoroName': 'TextEdit', 'CT2020': 'TextEdit', 'BoroCT2020': 'TextEdit', 'CDEligibil': 'TextEdit', 'NTAName': 'TextEdit', 'NTA2020': 'TextEdit', 'CDTA2020': 'TextEdit', 'CDTANAME': 'TextEdit', 'GEOID': 'TextEdit', 'PUMA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ctlabel_2v': 'TextEdit', 'ctlabel_do': 'TextEdit', 'Tract_csv': 'TextEdit', 'Tract': 'TextEdit', 'Tract_Merg': 'TextEdit', 'ambulatory': 'TextEdit', 'cognitive_': 'TextEdit', 'independen': 'TextEdit', 'selfcare_d': 'TextEdit', 'nhblack_pc': 'TextEdit', 'nhwhite_pc': 'TextEdit', 'hispanic_p': 'TextEdit', 'medianhhin': 'TextEdit', 'poverty_pc': 'TextEdit', 'unemployme': 'TextEdit', });
lyr_PovertyRate_3.set('fieldImages', {'CTLabel': 'TextEdit', 'BoroCode': 'TextEdit', 'BoroName': 'TextEdit', 'CT2020': 'TextEdit', 'BoroCT2020': 'TextEdit', 'CDEligibil': 'TextEdit', 'NTAName': 'TextEdit', 'NTA2020': 'TextEdit', 'CDTA2020': 'TextEdit', 'CDTANAME': 'TextEdit', 'GEOID': 'TextEdit', 'PUMA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ctlabel_2v': 'TextEdit', 'ctlabel_do': 'TextEdit', 'Tract_csv': 'TextEdit', 'Tract': 'TextEdit', 'Tract_Merg': 'TextEdit', 'ambulatory': 'TextEdit', 'cognitive_': 'TextEdit', 'independen': 'TextEdit', 'selfcare_d': 'TextEdit', 'nhblack_pc': 'TextEdit', 'nhwhite_pc': 'TextEdit', 'hispanic_p': 'TextEdit', 'medianhhin': 'TextEdit', 'poverty_pc': 'TextEdit', 'unemployme': 'TextEdit', });
lyr_HispanicPopulation_4.set('fieldImages', {'CTLabel': 'TextEdit', 'BoroCode': 'TextEdit', 'BoroName': 'TextEdit', 'CT2020': 'TextEdit', 'BoroCT2020': 'TextEdit', 'CDEligibil': 'TextEdit', 'NTAName': 'TextEdit', 'NTA2020': 'TextEdit', 'CDTA2020': 'TextEdit', 'CDTANAME': 'TextEdit', 'GEOID': 'TextEdit', 'PUMA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ctlabel_2v': 'TextEdit', 'ctlabel_do': 'TextEdit', 'Tract_csv': 'TextEdit', 'Tract': 'TextEdit', 'Tract_Merg': 'TextEdit', 'ambulatory': 'TextEdit', 'cognitive_': 'TextEdit', 'independen': 'TextEdit', 'selfcare_d': 'TextEdit', 'nhblack_pc': 'TextEdit', 'nhwhite_pc': 'TextEdit', 'hispanic_p': 'TextEdit', 'medianhhin': 'TextEdit', 'poverty_pc': 'TextEdit', 'unemployme': 'TextEdit', });
lyr_NonHispanicWhitePopulation_5.set('fieldImages', {'CTLabel': 'TextEdit', 'BoroCode': 'TextEdit', 'BoroName': 'TextEdit', 'CT2020': 'TextEdit', 'BoroCT2020': 'TextEdit', 'CDEligibil': 'TextEdit', 'NTAName': 'TextEdit', 'NTA2020': 'TextEdit', 'CDTA2020': 'TextEdit', 'CDTANAME': 'TextEdit', 'GEOID': 'TextEdit', 'PUMA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ctlabel_2v': 'TextEdit', 'ctlabel_do': 'TextEdit', 'Tract_csv': 'TextEdit', 'Tract': 'TextEdit', 'Tract_Merg': 'TextEdit', 'ambulatory': 'TextEdit', 'cognitive_': 'TextEdit', 'independen': 'TextEdit', 'selfcare_d': 'TextEdit', 'nhblack_pc': 'TextEdit', 'nhwhite_pc': 'TextEdit', 'hispanic_p': 'TextEdit', 'medianhhin': 'TextEdit', 'poverty_pc': 'TextEdit', 'unemployme': 'TextEdit', });
lyr_NonHispanicBlackPopulation_6.set('fieldImages', {'CTLabel': 'TextEdit', 'BoroCode': 'TextEdit', 'BoroName': 'TextEdit', 'CT2020': 'TextEdit', 'BoroCT2020': 'TextEdit', 'CDEligibil': 'TextEdit', 'NTAName': 'TextEdit', 'NTA2020': 'TextEdit', 'CDTA2020': 'TextEdit', 'CDTANAME': 'TextEdit', 'GEOID': 'TextEdit', 'PUMA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ctlabel_2v': 'TextEdit', 'ctlabel_do': 'TextEdit', 'Tract_csv': 'TextEdit', 'Tract': 'TextEdit', 'Tract_Merg': 'TextEdit', 'ambulatory': 'TextEdit', 'cognitive_': 'TextEdit', 'independen': 'TextEdit', 'selfcare_d': 'TextEdit', 'nhblack_pc': 'TextEdit', 'nhwhite_pc': 'TextEdit', 'hispanic_p': 'TextEdit', 'medianhhin': 'TextEdit', 'poverty_pc': 'TextEdit', 'unemployme': 'TextEdit', });
lyr_SelfCareDifficultyMales18to34_7.set('fieldImages', {'CTLabel': 'TextEdit', 'BoroCode': 'TextEdit', 'BoroName': 'TextEdit', 'CT2020': 'TextEdit', 'BoroCT2020': 'TextEdit', 'CDEligibil': 'TextEdit', 'NTAName': 'TextEdit', 'NTA2020': 'TextEdit', 'CDTA2020': 'TextEdit', 'CDTANAME': 'TextEdit', 'GEOID': 'TextEdit', 'PUMA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ctlabel_2v': 'TextEdit', 'ctlabel_do': 'TextEdit', 'Tract_csv': 'TextEdit', 'Tract': 'TextEdit', 'Tract_Merg': 'TextEdit', 'ambulatory': 'TextEdit', 'cognitive_': 'TextEdit', 'independen': 'TextEdit', 'selfcare_d': 'TextEdit', 'nhblack_pc': 'TextEdit', 'nhwhite_pc': 'TextEdit', 'hispanic_p': 'TextEdit', 'medianhhin': 'TextEdit', 'poverty_pc': 'TextEdit', 'unemployme': 'TextEdit', });
lyr_IndependentLivingDifficultyMales18to34_8.set('fieldImages', {'CTLabel': 'TextEdit', 'BoroCode': 'TextEdit', 'BoroName': 'TextEdit', 'CT2020': 'TextEdit', 'BoroCT2020': 'TextEdit', 'CDEligibil': 'TextEdit', 'NTAName': 'TextEdit', 'NTA2020': 'TextEdit', 'CDTA2020': 'TextEdit', 'CDTANAME': 'TextEdit', 'GEOID': 'TextEdit', 'PUMA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ctlabel_2v': 'TextEdit', 'ctlabel_do': 'TextEdit', 'Tract_csv': 'TextEdit', 'Tract': 'TextEdit', 'Tract_Merg': 'TextEdit', 'ambulatory': 'TextEdit', 'cognitive_': 'TextEdit', 'independen': 'TextEdit', 'selfcare_d': 'TextEdit', 'nhblack_pc': 'TextEdit', 'nhwhite_pc': 'TextEdit', 'hispanic_p': 'TextEdit', 'medianhhin': 'TextEdit', 'poverty_pc': 'TextEdit', 'unemployme': 'TextEdit', });
lyr_CognitiveDifficultyMales18to34_9.set('fieldImages', {'CTLabel': 'TextEdit', 'BoroCode': 'TextEdit', 'BoroName': 'TextEdit', 'CT2020': 'TextEdit', 'BoroCT2020': 'TextEdit', 'CDEligibil': 'TextEdit', 'NTAName': 'TextEdit', 'NTA2020': 'TextEdit', 'CDTA2020': 'TextEdit', 'CDTANAME': 'TextEdit', 'GEOID': 'TextEdit', 'PUMA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ctlabel_2v': 'TextEdit', 'ctlabel_do': 'TextEdit', 'Tract_csv': 'TextEdit', 'Tract': 'TextEdit', 'Tract_Merg': 'TextEdit', 'ambulatory': 'TextEdit', 'cognitive_': 'TextEdit', 'independen': 'TextEdit', 'selfcare_d': 'TextEdit', 'nhblack_pc': 'TextEdit', 'nhwhite_pc': 'TextEdit', 'hispanic_p': 'TextEdit', 'medianhhin': 'TextEdit', 'poverty_pc': 'TextEdit', 'unemployme': 'TextEdit', });
lyr_AmbulatoryDifficultyMales18to34_10.set('fieldImages', {'CTLabel': 'TextEdit', 'BoroCode': 'TextEdit', 'BoroName': 'TextEdit', 'CT2020': 'TextEdit', 'BoroCT2020': 'TextEdit', 'CDEligibil': 'TextEdit', 'NTAName': 'TextEdit', 'NTA2020': 'TextEdit', 'CDTA2020': 'TextEdit', 'CDTANAME': 'TextEdit', 'GEOID': 'TextEdit', 'PUMA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ctlabel_2v': 'TextEdit', 'ctlabel_do': 'TextEdit', 'Tract_csv': 'TextEdit', 'Tract': 'TextEdit', 'Tract_Merg': 'TextEdit', 'ambulatory': 'TextEdit', 'cognitive_': 'TextEdit', 'independen': 'TextEdit', 'selfcare_d': 'TextEdit', 'nhblack_pc': 'TextEdit', 'nhwhite_pc': 'TextEdit', 'hispanic_p': 'TextEdit', 'medianhhin': 'TextEdit', 'poverty_pc': 'TextEdit', 'unemployme': 'TextEdit', });
lyr_NYCShootings20182022_11.set('fieldImages', {'INCIDENT_K': 'TextEdit', 'OCCUR_DATE': 'DateTime', 'OCCUR_TIME': 'TextEdit', 'BORO': 'TextEdit', 'LOC_OF_OCC': 'TextEdit', 'PRECINCT': 'TextEdit', 'JURISDICTI': 'TextEdit', 'LOC_CLASSF': 'TextEdit', 'LOCATION_D': 'TextEdit', 'STATISTICA': 'TextEdit', 'PERP_AGE_G': 'TextEdit', 'PERP_SEX': 'TextEdit', 'PERP_RACE': 'TextEdit', 'VIC_AGE_GR': 'TextEdit', 'VIC_SEX': 'TextEdit', 'VIC_RACE': 'TextEdit', 'X_COORD_CD': 'TextEdit', 'Y_COORD_CD': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Lon_Lat': 'TextEdit', });
lyr_MedianHouseholdIncome_1.set('fieldLabels', {'CTLabel': 'inline label - visible with data', 'BoroCode': 'hidden field', 'BoroName': 'hidden field', 'CT2020': 'hidden field', 'BoroCT2020': 'hidden field', 'CDEligibil': 'hidden field', 'NTAName': 'hidden field', 'NTA2020': 'hidden field', 'CDTA2020': 'hidden field', 'CDTANAME': 'hidden field', 'GEOID': 'hidden field', 'PUMA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ctlabel_2v': 'hidden field', 'ctlabel_do': 'hidden field', 'Tract_csv': 'hidden field', 'Tract': 'hidden field', 'Tract_Merg': 'hidden field', 'ambulatory': 'hidden field', 'cognitive_': 'hidden field', 'independen': 'hidden field', 'selfcare_d': 'hidden field', 'nhblack_pc': 'hidden field', 'nhwhite_pc': 'hidden field', 'hispanic_p': 'hidden field', 'medianhhin': 'inline label - visible with data', 'poverty_pc': 'hidden field', 'unemployme': 'hidden field', });
lyr_UnemploymentRate_2.set('fieldLabels', {'CTLabel': 'inline label - visible with data', 'BoroCode': 'hidden field', 'BoroName': 'hidden field', 'CT2020': 'hidden field', 'BoroCT2020': 'hidden field', 'CDEligibil': 'hidden field', 'NTAName': 'hidden field', 'NTA2020': 'hidden field', 'CDTA2020': 'hidden field', 'CDTANAME': 'hidden field', 'GEOID': 'hidden field', 'PUMA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ctlabel_2v': 'hidden field', 'ctlabel_do': 'hidden field', 'Tract_csv': 'hidden field', 'Tract': 'hidden field', 'Tract_Merg': 'hidden field', 'ambulatory': 'hidden field', 'cognitive_': 'hidden field', 'independen': 'hidden field', 'selfcare_d': 'hidden field', 'nhblack_pc': 'hidden field', 'nhwhite_pc': 'hidden field', 'hispanic_p': 'hidden field', 'medianhhin': 'hidden field', 'poverty_pc': 'hidden field', 'unemployme': 'inline label - visible with data', });
lyr_PovertyRate_3.set('fieldLabels', {'CTLabel': 'inline label - visible with data', 'BoroCode': 'hidden field', 'BoroName': 'hidden field', 'CT2020': 'hidden field', 'BoroCT2020': 'hidden field', 'CDEligibil': 'hidden field', 'NTAName': 'hidden field', 'NTA2020': 'hidden field', 'CDTA2020': 'hidden field', 'CDTANAME': 'hidden field', 'GEOID': 'hidden field', 'PUMA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ctlabel_2v': 'hidden field', 'ctlabel_do': 'hidden field', 'Tract_csv': 'hidden field', 'Tract': 'hidden field', 'Tract_Merg': 'hidden field', 'ambulatory': 'hidden field', 'cognitive_': 'hidden field', 'independen': 'hidden field', 'selfcare_d': 'hidden field', 'nhblack_pc': 'hidden field', 'nhwhite_pc': 'hidden field', 'hispanic_p': 'hidden field', 'medianhhin': 'hidden field', 'poverty_pc': 'inline label - visible with data', 'unemployme': 'hidden field', });
lyr_HispanicPopulation_4.set('fieldLabels', {'CTLabel': 'inline label - visible with data', 'BoroCode': 'hidden field', 'BoroName': 'hidden field', 'CT2020': 'hidden field', 'BoroCT2020': 'hidden field', 'CDEligibil': 'hidden field', 'NTAName': 'hidden field', 'NTA2020': 'hidden field', 'CDTA2020': 'hidden field', 'CDTANAME': 'hidden field', 'GEOID': 'hidden field', 'PUMA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ctlabel_2v': 'hidden field', 'ctlabel_do': 'hidden field', 'Tract_csv': 'hidden field', 'Tract': 'hidden field', 'Tract_Merg': 'hidden field', 'ambulatory': 'hidden field', 'cognitive_': 'hidden field', 'independen': 'hidden field', 'selfcare_d': 'hidden field', 'nhblack_pc': 'hidden field', 'nhwhite_pc': 'hidden field', 'hispanic_p': 'inline label - visible with data', 'medianhhin': 'hidden field', 'poverty_pc': 'hidden field', 'unemployme': 'hidden field', });
lyr_NonHispanicWhitePopulation_5.set('fieldLabels', {'CTLabel': 'inline label - visible with data', 'BoroCode': 'hidden field', 'BoroName': 'hidden field', 'CT2020': 'hidden field', 'BoroCT2020': 'hidden field', 'CDEligibil': 'hidden field', 'NTAName': 'hidden field', 'NTA2020': 'hidden field', 'CDTA2020': 'hidden field', 'CDTANAME': 'hidden field', 'GEOID': 'hidden field', 'PUMA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ctlabel_2v': 'hidden field', 'ctlabel_do': 'hidden field', 'Tract_csv': 'hidden field', 'Tract': 'hidden field', 'Tract_Merg': 'hidden field', 'ambulatory': 'hidden field', 'cognitive_': 'hidden field', 'independen': 'hidden field', 'selfcare_d': 'hidden field', 'nhblack_pc': 'hidden field', 'nhwhite_pc': 'inline label - visible with data', 'hispanic_p': 'hidden field', 'medianhhin': 'hidden field', 'poverty_pc': 'hidden field', 'unemployme': 'hidden field', });
lyr_NonHispanicBlackPopulation_6.set('fieldLabels', {'CTLabel': 'inline label - visible with data', 'BoroCode': 'hidden field', 'BoroName': 'hidden field', 'CT2020': 'hidden field', 'BoroCT2020': 'hidden field', 'CDEligibil': 'hidden field', 'NTAName': 'hidden field', 'NTA2020': 'hidden field', 'CDTA2020': 'hidden field', 'CDTANAME': 'hidden field', 'GEOID': 'hidden field', 'PUMA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ctlabel_2v': 'hidden field', 'ctlabel_do': 'hidden field', 'Tract_csv': 'hidden field', 'Tract': 'hidden field', 'Tract_Merg': 'hidden field', 'ambulatory': 'hidden field', 'cognitive_': 'hidden field', 'independen': 'hidden field', 'selfcare_d': 'hidden field', 'nhblack_pc': 'inline label - visible with data', 'nhwhite_pc': 'hidden field', 'hispanic_p': 'hidden field', 'medianhhin': 'hidden field', 'poverty_pc': 'hidden field', 'unemployme': 'hidden field', });
lyr_SelfCareDifficultyMales18to34_7.set('fieldLabels', {'CTLabel': 'inline label - visible with data', 'BoroCode': 'hidden field', 'BoroName': 'hidden field', 'CT2020': 'hidden field', 'BoroCT2020': 'hidden field', 'CDEligibil': 'hidden field', 'NTAName': 'hidden field', 'NTA2020': 'hidden field', 'CDTA2020': 'hidden field', 'CDTANAME': 'hidden field', 'GEOID': 'hidden field', 'PUMA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ctlabel_2v': 'hidden field', 'ctlabel_do': 'hidden field', 'Tract_csv': 'hidden field', 'Tract': 'hidden field', 'Tract_Merg': 'hidden field', 'ambulatory': 'hidden field', 'cognitive_': 'hidden field', 'independen': 'hidden field', 'selfcare_d': 'inline label - visible with data', 'nhblack_pc': 'hidden field', 'nhwhite_pc': 'hidden field', 'hispanic_p': 'hidden field', 'medianhhin': 'hidden field', 'poverty_pc': 'hidden field', 'unemployme': 'hidden field', });
lyr_IndependentLivingDifficultyMales18to34_8.set('fieldLabels', {'CTLabel': 'inline label - visible with data', 'BoroCode': 'hidden field', 'BoroName': 'hidden field', 'CT2020': 'hidden field', 'BoroCT2020': 'hidden field', 'CDEligibil': 'hidden field', 'NTAName': 'hidden field', 'NTA2020': 'hidden field', 'CDTA2020': 'hidden field', 'CDTANAME': 'hidden field', 'GEOID': 'hidden field', 'PUMA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ctlabel_2v': 'hidden field', 'ctlabel_do': 'hidden field', 'Tract_csv': 'hidden field', 'Tract': 'hidden field', 'Tract_Merg': 'hidden field', 'ambulatory': 'hidden field', 'cognitive_': 'hidden field', 'independen': 'inline label - visible with data', 'selfcare_d': 'hidden field', 'nhblack_pc': 'hidden field', 'nhwhite_pc': 'hidden field', 'hispanic_p': 'hidden field', 'medianhhin': 'hidden field', 'poverty_pc': 'hidden field', 'unemployme': 'hidden field', });
lyr_CognitiveDifficultyMales18to34_9.set('fieldLabels', {'CTLabel': 'inline label - visible with data', 'BoroCode': 'hidden field', 'BoroName': 'hidden field', 'CT2020': 'hidden field', 'BoroCT2020': 'hidden field', 'CDEligibil': 'hidden field', 'NTAName': 'hidden field', 'NTA2020': 'hidden field', 'CDTA2020': 'hidden field', 'CDTANAME': 'hidden field', 'GEOID': 'hidden field', 'PUMA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ctlabel_2v': 'hidden field', 'ctlabel_do': 'hidden field', 'Tract_csv': 'hidden field', 'Tract': 'hidden field', 'Tract_Merg': 'hidden field', 'ambulatory': 'hidden field', 'cognitive_': 'inline label - visible with data', 'independen': 'hidden field', 'selfcare_d': 'hidden field', 'nhblack_pc': 'hidden field', 'nhwhite_pc': 'hidden field', 'hispanic_p': 'hidden field', 'medianhhin': 'hidden field', 'poverty_pc': 'hidden field', 'unemployme': 'hidden field', });
lyr_AmbulatoryDifficultyMales18to34_10.set('fieldLabels', {'CTLabel': 'inline label - visible with data', 'BoroCode': 'hidden field', 'BoroName': 'hidden field', 'CT2020': 'hidden field', 'BoroCT2020': 'hidden field', 'CDEligibil': 'hidden field', 'NTAName': 'hidden field', 'NTA2020': 'hidden field', 'CDTA2020': 'hidden field', 'CDTANAME': 'hidden field', 'GEOID': 'hidden field', 'PUMA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ctlabel_2v': 'hidden field', 'ctlabel_do': 'hidden field', 'Tract_csv': 'hidden field', 'Tract': 'hidden field', 'Tract_Merg': 'hidden field', 'ambulatory': 'inline label - visible with data', 'cognitive_': 'hidden field', 'independen': 'hidden field', 'selfcare_d': 'hidden field', 'nhblack_pc': 'hidden field', 'nhwhite_pc': 'hidden field', 'hispanic_p': 'hidden field', 'medianhhin': 'hidden field', 'poverty_pc': 'hidden field', 'unemployme': 'hidden field', });
lyr_NYCShootings20182022_11.set('fieldLabels', {'INCIDENT_K': 'inline label - visible with data', 'OCCUR_DATE': 'inline label - visible with data', 'OCCUR_TIME': 'inline label - visible with data', 'BORO': 'hidden field', 'LOC_OF_OCC': 'hidden field', 'PRECINCT': 'hidden field', 'JURISDICTI': 'hidden field', 'LOC_CLASSF': 'hidden field', 'LOCATION_D': 'hidden field', 'STATISTICA': 'inline label - visible with data', 'PERP_AGE_G': 'hidden field', 'PERP_SEX': 'hidden field', 'PERP_RACE': 'hidden field', 'VIC_AGE_GR': 'inline label - visible with data', 'VIC_SEX': 'inline label - visible with data', 'VIC_RACE': 'inline label - visible with data', 'X_COORD_CD': 'hidden field', 'Y_COORD_CD': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Lon_Lat': 'hidden field', });
lyr_NYCShootings20182022_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});