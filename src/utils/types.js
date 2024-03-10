import PropTypes from "prop-types";

export function getPropertyTypes() {
    return PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired;
}