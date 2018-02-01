ford.controller('mainRepositorio', function ($scope, $http, settings, $uibModal) {
  
  //pega as configurações de arquivo
  $scope.config = {
    filter: settings.get('repositorio.filters')
  };

  $scope.status = ['Terminado','Em andamento','Parado','Pausado'];
  $scope.ordem = ['Nome','Tipo','Tamanho crescente','Tamanho decrescente','Mais recente'];
  $scope.selected = undefined;
  
  //teste de botões com ng-click
  $scope.cliquei = function(msg) {
    alert('eae cara! eu sou o '+msg);
  };

  //exemplo de arquivos
  $scope.arquivos = [
    { 
      Nome:'Eleição',
      img:'img/objetos/pasta-100.png',
      tipo:'pasta'

    },
    {
      Nome:'Copa do Mundo',
      img:'img/objetos/pasta-100.png',
      tipo:'pasta'
    },
    {
      Nome:'Japão',
      img:'img/objetos/pasta-100.png',
      tipo:'pasta'
    },
    {
      Nome:'Lula',
      img:'img/objetos/arquivo-100.png',
      tipo:'arquivo'
    },
    {
      Nome:'Bolsonaro',
      img:'img/objetos/arquivo-100.png',
      tipo:'arquivo'
    },
    {
      Nome:'Neymar',
      img:'img/objetos/arquivo-100.png',
      tipo:'arquivo'
    }];

    $scope.selectObject = function (obj) {
      if($scope.selected == obj)
        $scope.selected = undefined;
        else
        $scope.selected = obj;
    };

  $scope.filter = {
    status: undefined,
    ordem: 'Nome',
    name: undefined,
    favorite: false
  };

   // Watch assiste a todos os filtros presentes na página esperando alguma alteração.
   $scope.$watch('filter', function (newFilter, oldFilter) {
    console.log(oldFilter);

    $(".repositorio").scrollTop("slow");
    $scope.countpage = 0;

    if ($scope.startPage == 1) {
      //carregar itens da primeira página
      $scope.startPage = 0;
    } else {

      if ((newFilter.status != oldFilter.status) || (newFilter.ordem != oldFilter.ordem)) {
        //$scope.loadItems(newFilter.status, newFilter.ordem, undefined);
      }
      if (newFilter.name != oldFilter.name) {
        //$scope.loadItems(newFilter.status, newFilter.ordem, newFilter.name);
      }
    }

    console.log(newFilter);

  }, true);

  /*************** Funções de tratamento ***************/

  $scope.loading = function (divId, divResult) {
    $("#loading" + divId).show();
    $("#error" + divId).hide();
    $("#empty" + divId).hide();
    $("#" + divResult).hide();
  }

  $scope.sucess = function (divId, divResult) {
    $("#loading" + divId).hide();
    $("#" + divResult).show();
  }

  $scope.empty = function (divId) {
    $("#loading" + divId).hide();
    $("#empty" + divId).show();
  }

  $scope.error = function (divId) {
    $("#loading" + divId).hide();
    $("#error" + divId).show();
  }
});
