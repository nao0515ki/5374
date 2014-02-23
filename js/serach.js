function search(){
  //検索文字列
  var searchString = document.searchForm.searchString.value;
  //検索対象文字列
  var targetString = "";
  var positionOfTheStr = 0;
  //divから読み込んで検索する
  var accordionStr = "accordion-group"
  var accordionFullStr =""
  var findTheStringFlg = "false"
  for (var accordionNum = 0 ; accordionNum<=3 ; accordionNum++)
  {
    accordionFullStr = accordionStr + accordionNum.toString();
    targetString = document.getElementById(accordionFullStr).innerHTML;
    positionOfTheStr=targetString.search(searchString);
    if(positionOfTheStr>=0){
      switch(accordionNum)
      {
      case 0:
        alert("[" + searchString + "]は[燃やさない]の中にあります");
        findTheStringFlg = "ture"
        break;
      case 1:
        alert("[" + searchString + "]は[資源]の中にあります");
        findTheStringFlg = "ture"
        break;
      case 2:
        alert("[" + searchString + "]は[燃えるごみ]の中にあります");
        findTheStringFlg = "ture"
        break;
      case 3:
        alert("[" + searchString + "]は[びん]の中にあります");
        findTheStringFlg = "ture"
        break;
      }
      break;
    }
  }
  if(findTheStringFlg=="false"){
    alert("[" + searchString + "]に該当する文字は見つかりませんでした");
  }
}