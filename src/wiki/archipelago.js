import { clearElement } from './../functions.js';
import { infoBoxBuilder } from './functions.js';

export function archipelagoPage(){
    const content = $('#content');
    clearElement(content);

    infoBoxBuilder(content,{ name: 'overview', template: 'archipelago', paragraphs: 2, h_level: 2 });
    infoBoxBuilder(content,{ name: 'locations', template: 'archipelago', paragraphs: 3, h_level: 2 });
    infoBoxBuilder(content,{ name: 'items', template: 'archipelago', paragraphs: 2, h_level: 2 });
    infoBoxBuilder(content,{ name: 'connection', template: 'archipelago', paragraphs: 5, h_level: 2 });
}
