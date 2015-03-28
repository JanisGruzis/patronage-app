/**
 * Converts MathJax formulas to pretty format.
 */
directives.directive("ngMathjax", function()
{
	return {
		scope : true,
		link : function(scope, element, attrs)
			{
				scope.$watch(
					function(scope)
					{
						return element.find('input[type="hidden"].hash').html();
					},
					function(value)
					{
						MathJax.Hub.Queue(["Typeset", MathJax.Hub, element[0]]);
					}
				);
			}
	};
});