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
    let nodeTbody = document.createElement("TBODY");
    for(let i=0; i<fifteen.length; i++){
        let nodeTr = nodeTbody.appendChild(document.createElement("TR"));
        for (var j = 0; j < fifteen[i].length; j++) { 
        let nodeTd = nodeTr.appendChild(document.createElement("TD"));
        nodeTd.innerHTML = fifteen[i][j];
        console.log(nodeTd.innerHTML);
      }
    }
    document.querySelector('.A1').appendChild(nodeTbody);

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