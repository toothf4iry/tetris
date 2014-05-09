/**
 * Created with IntelliJ IDEA.
 * User: severus
 * Date: 2014.05.08.
 * Time: 17:36
 * To change this template use File | Settings | File Templates.
 */




var createMap = function(sizeRow, sizeColumn){
    this.createRows = function(sizeRow) {
        createRows.r = r;
          var  r = [];
        for (var i = 1; i < sizeRow; i++) {
            r [i] = '#';
        return r;
        }
} ;
    this.createColumns = function(sizeColumn) {
        createColumns.z = z;
        var z = []  ;
                for (var j = 1; j< sizeColumn; j++) {
                    z [j] = '#';
               return z;
                }
}   ;
   this.rows = [createRows.r];
   this.columns = [createColumns.z] ;
   this.mapArray = [ rows, columns] ;
   this.createRows(sizeRow);
   this.createColumns(sizeColumn);
   var fill = document.getElementById("boarddiv");
    fill.innerHTML = mapArray;
}

