export const primary_route_types = [
    'metro',
    'tram',
    'trolley',
    'bus'
];

export const secondary_route_types = [
    'temporary',
    'night',
    'school'
];

export function determine_route_colour(route) {
    let bg_color = '';
    let text_color = 'text-light';
    if(route.hasOwnProperty('is_active') && route.is_active === false) {
        bg_color = 'bg-secondary';
    }
    else if(route.type === 'metro' && route.route_ref === 'M4') {
        bg_color = 'M4-bg-color';
        text_color = 'text-dark';
    }
    else if(route.type === 'metro') {
        bg_color = `${route.route_ref}-bg-color`;
    }
    else {
        bg_color = `${route.type}-bg-color`;
    }
    return `${bg_color} ${text_color}`;
}
