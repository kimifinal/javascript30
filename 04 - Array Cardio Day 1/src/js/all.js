// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
    
    // 1. 篩選出於1500~1599年間出生的inventor(year in 1500-1599)
    // 使用Array.prototype.filter()
    const fifteen = inventors.filter(inventors => (inventors.year >= 1500 && inventors.year < 1600));
    console.table(fifteen);
    const answer1 = JSON.stringify(fifteen);
    document.querySelector('.A1').innerHTML = 'A1. ' + answer1;
    const A1 = document.querySelector('.A1');
    const A1nodeTable = document.createElement("TABLE");
    for(let i=0; i<fifteen.length; i++){
      const A1nodeTr = document.createElement('tr');
      A1nodeTr.innerHTML = '<td>' + fifteen[i].first + '</td>' +
                         '<td>' + fifteen[i].last + '</td>' +
                         '<td>' + fifteen[i].year + '</td>' +
                         '<td>' + fifteen[i].passed + '</td>';
      A1nodeTable.appendChild(A1nodeTr);
    }
    A1.appendChild(A1nodeTable);

    // 2. 將inventors內的first與last組合成一個陣列
    // 使用Array.prototype.map()
    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.table(fullNames);
    for(let i=0; i<fullNames.length; i++){
      const node = document.createElement("LI");
      const textnode = document.createTextNode(fullNames[i]);
      node.appendChild(textnode);
      document.querySelector('.A2').appendChild(node);
    }

    // 3. 依據生日由大至小排序所有的inventor
    // 使用Array.prototype.sort()

    // const ordered = inventors.sort(function(a, b) {
    //   if(a.year > b.year) {
    //     return 1;
    //   } else {
    //     return -1;
    //   }
    // });
    //利用箭頭函式及三元運算式可簡寫如下
    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(ordered);
    const answer3 = JSON.stringify(ordered);
    document.querySelector('.A3').innerHTML = 'A3. ' + answer3;
    const A3 = document.querySelector('.A3');
    const A3nodeTable = document.createElement("TABLE");
    for(let i=0; i<ordered.length; i++){
      const A3nodeTr = document.createElement('tr');
      A3nodeTr.innerHTML = '<td>' + ordered[i].first + '</td>' +
                         '<td>' + ordered[i].last + '</td>' +
                         '<td>' + ordered[i].year + '</td>' +
                         '<td>' + ordered[i].passed + '</td>';
      A3nodeTable.appendChild(A3nodeTr);
    }
    A3.appendChild(A3nodeTable);

    // 4. 加總所有inventor的在世時間
    // 使用Array.prototype.reduce()

    // 傳統寫法
    // let totalYears = 0;
    // for (let i = 0; i < inventors.length; i++) {
    //     let liveYear = inventors[i].passed - inventors[i].year;
    //     totalYears += liveYear;
    // }

    const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);
    console.log(totalYears);
    const A4 = document.querySelector('.A4');
    A4.innerHTML = 'A4. ' + totalYears;

    // 5. 依據年齡由大至小排序所有的inventor
    // 使用Array.prototype.sort()

    // const oldest = inventors.sort(function(a, b) {
    //   const lastInventor = a.passed - a.year;
    //   const nextInventor = b.passed - b.year;
    //   if(lastInventor > nextInventor) {
    //     return 1;
    //   } else {
    //     return -1;
    //   }
    // });

    const oldest = inventors.sort(function(a, b) {
      const lastInventor = a.passed - a.year;
      const nextInventor = b.passed - b.year;
      return lastInventor > nextInventor ? -1 : 1;
    });
    console.table(oldest);
    const answer5 = JSON.stringify(oldest);
    document.querySelector('.A5').innerHTML = 'A5. ' + answer5;
    const A5 = document.querySelector('.A5');
    const A5nodeTable = document.createElement("TABLE");
    for(let i=0; i<oldest.length; i++){
      const yearOld = oldest[i].passed - oldest[i].year;
      const A5nodeTr = document.createElement('tr');
      A5nodeTr.innerHTML = '<td>' + oldest[i].first + '</td>' +
                         '<td>' + oldest[i].last + '</td>' +
                         '<td>' + ordered[i].year + '</td>' +
                         '<td>' + ordered[i].passed + '</td>' +
                         '<td>' + yearOld + '</td>';
      A5nodeTable.appendChild(A5nodeTr);
    }
    A5.appendChild(A5nodeTable);

    // 6. 列出wiki中巴黎所有包含'de'的路名(在wiki中透過querySelectorAll來選取資料作篩選)
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // 使用Array.prototype.map() & Array.prototype.filter() + Array.prototype.includes()

    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));

    // 7. 依據lastName排序所有people的資料
    // 使用Array.prototype.sort() & Array.prototype.split()

    const alpha = people.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      // console.log(aLast + bLast);
      return aLast > bLast ? 1 : -1;
    });
    console.log(alpha);
    const answer7 = JSON.stringify(alpha);
    // console.log(typeof answer7);
    document.querySelector('.A7').innerHTML = 'A7. ' + alpha;
    const A7 = document.querySelector('.A7');
    const A7nodeTable = document.createElement("TABLE");
    for(let i=0; i<alpha.length; i++){
      const A7nodeTr = document.createElement('tr');
      A7nodeTr.innerHTML = '<td>' + alpha[i] + '</td>';
      A7nodeTable.appendChild(A7nodeTr);
    }
    A7.appendChild(A7nodeTable);

    // 8. 分別計算data內每個種類的數量
    // 使用Array.prototype.reduce()

    const transportation = data.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      // console.log(item);
      // console.log(obj);
      obj[item]++;
      return obj;
    }, {});
    console.table(transportation);
    const answer8 = JSON.stringify(transportation);
    console.log(answer8);
    document.querySelector('.A8').innerHTML = 'A8. ' + answer8;
    const A8 = document.querySelector('.A8');
    const A8nodeTable = document.createElement("TABLE");
    let content = '';
    for(let key in transportation) {  //宣告key變數儲存物件的屬性名稱
      const A8nodeTr = document.createElement('tr');
      A8nodeTr.innerHTML += key + " : " + transportation[key]; 
      //key為物件屬性名稱，transportation[key]為物件屬性值
      A8nodeTable.appendChild(A8nodeTr); 
      console.log(A8nodeTr.innerHTML);
    }
    A8.appendChild(A8nodeTable);
    
    
    //題目：試著將統計people的所有單字拆開，並統計各單字共出現次數(僅包含英文字)
    //先宣告一個空陣列來傳入item，
    //接著將每個item透過match()拆開只取英文字，
    //再利用forEach來建立內容或是累加總數。
    const strCnt = people.reduce(function (obj, item) {
      const itemStr = item.match(/[a-zA-Z]/g, '');
          itemStr.forEach(str => {
              if (!obj[str]) {
             obj[str] = 0;
              }
              obj[str]++
          })
      return obj;
    }, {});
    console.log(strCnt);
    