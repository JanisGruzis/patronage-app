/**
 * Makes HTML to be trusted by angular and not escaped.
 */
filters.filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]
);

/**
 * Generates json array with numbers in range.
 */
filters.filter('range',function(){
    return function(to) {
        return _.range(to);
    };
});

/**
 * Date string to IOS standart.
 */
filters.filter('dateToISO', function() {
	return function(input) {
		return new Date(input);
	};
});