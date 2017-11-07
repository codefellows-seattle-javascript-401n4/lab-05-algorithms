'use strict';



const List = require ('../lib/list.js');
const expect = require ('expect');



describe ('Push', function () {
  let myList = new List;

  it ('return error if undefined', function (done) {
    expect (myList.push ()).toBe (undefined);
    done ();
  });

  it ('add element to end list', function (done) {
    let expected = 'hello';
    myList.push ('hello');
    expect (myList [myList.length -1]).toBe (expected);
    done ();
  });

  it ('increase list length', function (done) {
    let expected = 1;
    expect (myList.length).toBe (expected);
    done ();
  });
});



describe ('Pop', function () {
  let myList = new List;

  it ('error if length is than 1', function (done) {
    let empty = new List;
    expect (emptyList.pop ()).toBe (undefined);
    done ();
}});

  it ('return last element', function (done) {
    myList.push ('hello');
    let pop = myList.pop ();
    let expected = 'hello';
    expect (pop).toBe (expected);
    done ();
  }));



  describe ('Map', function () {
    let myList = new List;
    let newList;

    it ('error if argument is undefined', function (done) {
      expect (myList.map ()).toBe (undefined);
      done ();
    });

    it ('double value in list', function (done) {
      myList.push (2);
      myList.push (4);
      newList = myList.map (x => x * 2);
      let expected = {0 : 4, 1 : 8, length : 2};
      expect (newList).toEqual (expected);
      done ();
    });

    it ('check for correct length', function (done) {
      let expected = 2;
      expect (newList.length).toBe (expected);
      done ();
    });

    it ('add 3 to value property', function (done) {
      myList.push (2);
      myList.push (4);
      newList = myList.forEach (x => x + 3);
      let expected = {0 : 5, 1 : 7, length : 2};
      expect (newList).toEqual (expected);
      done ();
    });

    it ('check correct length', function (done) {
      let expected = 2;
      expect (newList.length).toBe (expected);
      done ();
    });



    describe ('Reduce', function () {
      let myList = new List;
      let sum = 0;

      it ('error if value is missing', function (done) {
        expect (myList.reduce()).toBe (undefined);
        done ();
      });

      it ('return sum of each value', function (done) {
        myList.push (2);
        myList.push (4);
        sum = myList.reduce ((x, y) => y = y + x, 0);
        let expected = 6;
        expect (sum.toEqual (expected);
      done ();
    });

      it ('main list should be edited', function (done) {
        let expected = {0 : 2, 1 : 4, length : 2};
        expect (myList).toEqual (expected);
        done ();
      });



      describe ('Filter', function () {
        let myList = new List;
        let filtered = [];

        it ('return error if conditional is missing', function () {
          let expected = {0 : 2, 1 : 4, length : 2};
          expect (myList.filter ()).toBe (undefined);
          done ();
        });

        it ('return filtered values', function (done) {
          myList.push (2);
          myList.push (4);
          myList.push (1);

          filtered = mylist.filter (x => x < 3);
          let expected = [2, 1];
          expect (filtered).toEqual (expected);
          done ();
        });

        it ('list should be edited', function (done) {
          let expected = {0 : 2, 1 : 4, 1, length : 3};
          expect (myList).toEqual (expected);
          done ();
        })


      }}};
  });
}));
