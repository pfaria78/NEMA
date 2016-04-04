angular.module('nema.service', [
])
.factory('ContentService', ['$http', function($http){
	return{
		historyContent:null,
		rulesContent:null,
		terminologContent:null,

        _convertToJSON:function(data){
            // convert the data to JSON and provide
            // it to the success function below
            var x2js = new X2JS();
            var json = x2js.xml_str2json( data );
            return json;
        },

		getHistoryContent: function(handler){
            var self = this;
			$http.get('data/history.xml',{
                transformResponse:function(data) {
                   data = self._convertToJSON(data);
                   handler(data.history);
                }
            })
		},

        getTerminologyContent: function(handler){
            var self = this;
            $http.get('data/terminology.xml',{
                transformResponse:function(data) {
                   data = self._convertToJSON(data);
                   handler(data.terminology);
                }
            })
        },

         getRulesContent: function(handler){
            var self = this;
            $http.get('data/rules.xml',{
                transformResponse:function(data) {
                   data = self._convertToJSON(data);
                   handler(data.rules);
                }
            })
        }
	}
}])
;