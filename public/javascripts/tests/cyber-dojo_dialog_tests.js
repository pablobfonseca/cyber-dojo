
var $cd = cyberDojo;

TestCase("cyber-dojo-dialog_tests", {  
  
  "test home page dialog buttons": function() {
    $cd.dialog_about();
    $cd.dialog_basics();
    $cd.dialog_donations();
    $cd.dialog_faqs();
    $cd.dialog_feedback();
    $cd.dialog_links();
    $cd.dialog_source();
    $cd.dialog_tips();
    $cd.dialog_why();    
  },
  
  "test dialog_dashboard_tips": function() {
    $cd.dialog_dashboard_tips();    
  },
  
  "test dialog_kata_help": function() {
    $cd.dialog_kata_help();    
  },
  
  "test dialog_id": function() {
    title = '23ED346A7E';
    info = { language: "Ruby" };
    $cd.dialog_id(title, info);    
  },

  //----------------------------

  "test dialog_no_id": function() {
    $cd.dialog_noId();
  },
  
  "test dialog_cantFindDojo": function() {
    id = '12345ABCDE';
    $cd.dialog_cantFindDojo(id);
  },
  
  "test dialog_dojoIsFull": function() {
    id = '12345ABCDE';
    $cd.dialog_dojoIsFull(id);
  },
  
  "test dialog_startCoding": function() {
    id = '12345ABCDE';
    avatarName = 'wolf';
    $cd.dialog_startCoding(id, avatarName);    
  },
  
  "test dialog_resumeCoding": function() {
    id = '12345ABCDE';
    $cd.dialog_resumeCoding(id);    
  },
  
  "test dialog_revert.createRevertDialog()": function() {
    id = '1234512345';
    avatarName = 'wolf';
    tag = 15;
    $cd.dialog_revert(id, avatarName, tag);
    data =  {
      visibleFiles: {
        'one': "one-content",
        'two': "two-content"
      },
      inc: {
        colour: 'red',
        revert_tag: '15',
        number: '44'
      }
    };
    $cd.dialog_revert.createRevertDialog(data);
  },
  
});
