angular.module('nema.service', [
])
.factory('ContentService', ['$http', function($http){
	return{
		historyContent:null,
		rulesContent:null,
		terminologContent:null,

		getHistoryContent: function(handler){
			$http.get(
                    'data/history.xml',
                    {transformResponse:function(data) {
                      // convert the data to JSON and provide
                      // it to the success function below
                        var x2js = new X2JS();
                        var json = x2js.xml_str2json( data );
                        return json;
                        }
                    }
                ).
                success(function(data, status) {
                    // send the converted data back
                    // to the callback function
                    handler(data);
                })
		}
	}
}])
;