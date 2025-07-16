export function determine_route_colour(route) {
    if(route.is_active === false) {
        return 'bg-secondary';
    }
    else if(route.type === 'metro') {
        if(route.route_ref === 'M4') {
            return `M4-bg-color text-dark`;
        }
        return `${route.route_ref}-bg-color`;
    }
    return `${route.type}-bg-color`;
}
