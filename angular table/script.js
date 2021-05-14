var app = angular.module('angularTable', ['ui.bootstrap']);
app.filter('startFrom', function () {
	return function (input, start) {
		if (input) {
			start = +start;
			return input.slice(start);
		}
		return [];
	};
});

app.controller('PageCtrl', ['$scope', 'filterFilter', function ($scope, filterFilter) {
	
	


 
	$scope.items = [{
		"name":"Martin",
        "email": "martin@patientbond.com",
        "phone": "1234567890",
        "gender": "male",
        "age": "24",
	}, {
		"name": "Harry",
        "email": "harry@hotmail.com",
        "phone": "456745678",
        "gender": "male",
         "age": "22"
		
	}, {
		"name": "Pat",
        "email": "pat@hotmail.com",
        "phone": "3435344535",
        "gender": "male",
        "age":"21"
	}, {
		"name": "Alex",
        "email": "alex@hotmail.com",
       "phone": "0987654321",
       "gender": "fas fa-male",
        "age":"23"
	}, {
		"name": "Nora Smith",
        "email": "nora@hotmail.com",
        "phone": "6754890876",
        "gender": "female",
        "age": "23"
	}, {
		"name": "Name3",
        "email": "3name@hotmail.com",
        "phone": "6754498876",
        "gender": "female",
        "age": "23"
	}, {
		"name": "Name4",
        "email": "4name@hotmail.com",
        "phone": "675434586",
        "gender": "male",
        "age": "29"
	}, {
		"name": "name8",
		"email": "8name@hotmail.com",
        "phone": "8775434586",
        "gender": "male",
        "age": "29"
	}, {
		"name": "name 9",
		"email": "9name@hotmail.com",
        "phone": "975434586",
        "gender": "male",
        "age": "19"
	}, {
		"name": "name 10",
		"email": "10name@hotmail.com",
        "phone": "877434586",
        "gender": "female",
        "age": "24"
	},{
		"name": "Peter",
		"email": "peter@hotmail.com",
        "phone": "8755434586",
        "gender": "male",
        "age": "23"
	}, {
		"name": "Frank",
		"email": "8name@hotmail.com",
        "phone": "8775434586",
        "gender": "male",
        "age": "29"
	}, {
		"name": "Joe",
		"email": "joe@hotmail.com",
        "phone": "774434586",
        "gender": "male",
        "age": "23"
	}, {
		"name": "Ralph",
		"email": "ralph@hotmail.com",
        "phone": "87654586",
        "gender": "male",
        "age": "29"
	}, {
		"name": "Gina",
		"email": "Gina@hotmail.com",
        "phone": "775434586",
        "gender": "female",
        "age": "23"
	}, {
		"name": "Sam",
		"email": "sam@hotmail.com",
        "phone": "888434586",
        "gender": "male",
        "age": "29"
	}, {
		"name": "Britney",
		"email": "britney@hotmail.com",
        "phone": "5555434586",
        "gender": "female",
        "age": "26"
	}
	
	];
	
	localStorage.setItem("sample_data", JSON.stringify($scope.items));
	localStorage.setItem("env", 'dev');
	
if(localStorage.getItem('sample_data') != null){
   $scope.items = JSON.parse(localStorage.getItem('sample_data'));
   $scope.env = localStorage.getItem("env");
}
	
	
	// create empty search model (object) to trigger $watch on update
	$scope.search = {};

	$scope.resetFilters = function () {
		// needs to be a function or it won't trigger a $watch
		$scope.search = {};
	};

	// pagination controls
	$scope.currentPage = 1;
	$scope.totalItems = $scope.items.length;
	$scope.entryLimit = 5; // items per page
	$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

	// $watch search to update pagination
	$scope.$watch('search', function (newVal, oldVal) {
		$scope.filtered = filterFilter($scope.items, newVal);
		$scope.totalItems = $scope.filtered.length;
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
		$scope.currentPage = 1;
	}, true);

//adding another user

	//function to save the data which was added in the input in modal
	$scope.addUserData=function()
    {
        if($scope.name!="" && $scope.email!=""&& $scope.phone!=""&& $scope.gender!=""&& $scope.age!="")
        {
			//adding the new user at top of the table 
        $scope.items.unshift({
            name:$scope.name,
            email:$scope.email,
            phone:$scope.phone,
            gender:$scope.gender,
            age:$scope.age
        })
		
	
	}
	
	
}

$scope.formHandler = function() {
	$scope.name="";
$scope.email="";
$scope.phone="";
$scope.gender="";
$scope.age="";
$scope.check="";
$scope.myForm.$setPristine();
$scope.myForm.$setUntouched();

	
  };
	
      
    
	
}]);
