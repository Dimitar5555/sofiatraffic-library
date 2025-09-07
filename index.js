export const primary_route_types = [
    'metro',
    'tram',
    'trolley',
    'bus'
];

export const secondary_route_types = [
    'temporary',
    'school',
    'night'
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

export function normalise_route(route) {
    const overrides = [
        {
            old_type: 'trolley',
            old_ref: '9А',
            new_type: 'bus',
            new_ref: '9'
        },
        {
            old_type: 'bus',
            old_ref: '9А',
            new_ref: '9'
        }
    ];

    for(const override of overrides) {
        if(route.type === override.old_type && route.route_ref === override.old_ref) {
            if(override.hasOwnProperty('new_type')) {
                route.type = override.new_type;
            }
            if(override.hasOwnProperty('new_ref')) {
                route.route_ref = override.new_ref;
            }
            return true;
        }
    }
    return false;
}
