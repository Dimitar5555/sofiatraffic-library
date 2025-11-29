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

export function get_route_classes(type, route_ref, is_active=true) {
    let bg_color = '';
    let text_color = 'text-light';
    if(is_active === false) {
        bg_color = 'bg-secondary';
    }
    else if(type === 'metro' && route_ref === 'M4') {
        bg_color = 'M4-bg-color';
        text_color = 'text-dark';
    }
    else if(type === 'metro') {
        bg_color = `${route_ref}-bg-color`;
    }
    else if(type === 'bus' && typeof route_ref === 'string' && route_ref.startsWith('N')) {
        bg_color = 'night-bg-color';
    }
    else {
        bg_color = `${type}-bg-color`;
    }
    return `${bg_color} ${text_color}`;
}

export function normalise_route(route) {
    const overrides = [
        {
            old_type: 'trolley',
            old_ref: '9А',
            new_type: 'bus',
            new_ref: '9',
            disabled: true
        },
        {
            old_type: 'bus',
            old_ref: '9А',
            new_ref: '9'
        }
    ];

    for(const override of overrides) {
        if(override.disabled) {
            continue;
        }
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
