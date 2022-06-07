var mediaPath = '../core/media/';

Blockly.Blocks['add_background'] = {
  init: function () {
    this.appendDummyInput().appendField('Add Background');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['add_background'] = function (block) {
  var code = `
    highlightBlock("${block.id}");
    $('.appContainer').show();`;
  return code;
};

Blockly.Blocks['add_title'] = {
  init: function () {
    this.appendDummyInput().appendField('Add Title');
    this.appendDummyInput().appendField('" Binary Search " ');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['add_title'] = function (block) {
  var code = `
  highlightBlock("${block.id}");
  $('#title').show();
`;
  return code;
};

Blockly.Blocks['add_keyboard'] = {
  init: function () {
    this.appendDummyInput().appendField('Add Keyboard');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['add_keyboard'] = function (block) {
  var code = `
    highlightBlock("${block.id}");
    $('.keyboard').show();`;
  return code;
};

Blockly.Blocks['create_var'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Create Variable')
      .appendField(
        new Blockly.FieldDropdown([
          ['inputArray', 'arrayInput'],
          ['key', 'keyInput'],
        ]),
        'variable',
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
  },
};

Blockly.JavaScript['create_var'] = function (block) {
  var varValue = block.getFieldValue('variable');
  var code = `
    highlightBlock("${block.id}");
    $('#${varValue}').show();
    if('#${varValue}'=='#arrayInput'){
      $('#arrayLabel').show();
    }
    else if('#${varValue}'=='#keyInput'){
      $('#keyLabel').show();
    }
   

    var ${varValue}="";
    var arr=[];
    

    $('#${varValue}').off('click').on('click', function (e) {
      try{
        readInputValue(e)
      }catch{}
  })

  `;
  return code;
};

Blockly.Blocks['add_array_button'] = {
  init: function () {
    this.appendDummyInput().appendField('Add Array Button');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['add_array_button'] = function (block) {
  var code = `
    highlightBlock("${block.id}");
    $('#addArray').show();

    $('.appContainer #addArray').off('click').on('click', function (e) {

      if($('#arrayInput').val()!= ''){
        arr.push(document.getElementById("arrayInput").value);
        arr.sort();
        $('#arrayInput').val('');
        end=arr.length-1;
        $('#arr').show();
        $('#arr').html("[ " + arr + " ]");
      

      }
      })
  
  

  `;
  return code;
};

Blockly.Blocks['create_var1'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Create Variable')
      .appendField(
        new Blockly.FieldDropdown([
          ['start', 'start'],
          ['mid', 'mid'],
          ['end', 'end'],
        ]),
        'variable1',
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
  },
};

Blockly.JavaScript['create_var1'] = function (block) {
  var varValue1 = block.getFieldValue('variable1');
  var code = `
    highlightBlock("${block.id}");
    var start=0;
    var end=0;

    

  `;
  return code;
};

Blockly.Blocks['create_currentValue'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Create variable')
      .appendField(new Blockly.FieldLabel('currentValue ', 'customLabel'));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  },
};

Blockly.JavaScript['create_currentValue'] = function (block) {
  var code = `
  highlightBlock("${block.id}");
  var currentValue = null;
  `;
  return code;
};

Blockly.Blocks['read_input'] = {
  init: function () {
    this.appendDummyInput().appendField('∱: Read Input');
    this.appendDummyInput().appendField('(Called when input field is clicked)');
    this.appendStatementInput('read_input_values_func_body').setCheck(null);
    this.setColour(125);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['read_input'] = function (block) {
  var read_input_values_func_body = Blockly.JavaScript.statementToCode(
    block,
    'read_input_values_func_body',
  );
  var code = `
  function readInputValue(e){
    highlightBlock("${block.id}");
    var fieldId = e.target.id;
    ${read_input_values_func_body};
  }
  `;
  return code;
};

Blockly.Blocks['set_variables_condition'] = {
  init: function () {
    this.appendDummyInput().appendField('If input field');
    this.appendDummyInput()
      .appendField(new Blockly.FieldLabel(' inputArray ', 'customLabel'))
      .appendField('is clicked');
    this.appendStatementInput('inputStatement').setCheck(null).appendField('Do');
    this.appendDummyInput().appendField('Else if input field');
    this.appendDummyInput()
      .appendField(new Blockly.FieldLabel(' key ', 'customLabel'))
      .appendField('is clicked');
    this.appendStatementInput('keyStatement').setCheck(null).appendField('Do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
  },
};

Blockly.JavaScript['set_variables_condition'] = function (block) {
  if (!block.getParent()) return '';

  var inputStatement = Blockly.JavaScript.statementToCode(block, 'inputStatement');
  var keyStatement = Blockly.JavaScript.statementToCode(block, 'keyStatement');

  var code = `
  if(fieldId === 'keyInput'){
    highlightBlock("${block.id}");
    ${keyStatement}
  }else if(fieldId === 'arrayInput'){
    highlightBlock("${block.id}");
    ${inputStatement}
  }
  `;
  return code;
};

Blockly.Blocks['set_value'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Set')
      .appendField(new Blockly.FieldLabel('currentValue', 'customLabel'))
      .appendField('=')
      .appendField(
        new Blockly.FieldDropdown([
          ['inputArray', 'arrayInput'],
          ['key', 'keyInput'],
        ]),
        'value',
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
  },
};

Blockly.JavaScript['set_value'] = function (block) {
  if (!block.getParent()) return '';
  var value = block.getFieldValue('value');
  var code = `
        $("#keyInput").css("outline", "none");
      
        $("#arrayInput").css("outline", "none");   
        
      if (typeof currentValue !== "undefined") {
        highlightBlock("${block.id}");
        currentValue = e.target.id;
        $("#${value}").css("outline", "2px solid #000");  
           
      }
  `;
  return code;
};

Blockly.Blocks['func_set_inputs'] = {
  init: function () {
    this.appendDummyInput().appendField('∱: Set provided variables');
    this.appendDummyInput().appendField('(Called when Keypad is clicked)');
    this.appendStatementInput('func_set_inputs_body').setCheck(null);
    this.setColour(210);
  },
};

Blockly.JavaScript['func_set_inputs'] = function (block) {
  var func_set_inputs_body = Blockly.JavaScript.statementToCode(block, 'func_set_inputs_body');
  var code = `
  $('.appContainer .numpad .keys').off('click').on('click', readInput)
  $('.keys').off('click').on('click', readInput)
  function readInput(e) {
    highlightBlock("${block.id}");
    ${func_set_inputs_body};
  }
  `;
  return code;
};

Blockly.Blocks['set'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Add Clicked Letter to')
      .appendField(new Blockly.FieldLabel('currentValue', 'customLabel'));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(275);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['set'] = function (block) {
  var code = `
    highlightBlock("${block.id}");
    var tmp = $(this).text()
    var type = $(this).attr('id')
    if(currentValue=="keyInput"){
      if(type=='del')
      {
        var length = keyInput.length;
        keyInput =keyInput.slice(0,length-1) 
      }
      else
      {
        keyInput = tmp
      }
      $('#keyInput').val(keyInput);
      highlightBlock("${block.id}");
    }

    
      if(currentValue=="arrayInput"){
        if(type=='del')
        {
          arrayInput = ""; 
        }
        else {
          arrayInput = tmp;
        }
        $('#arrayInput').val(arrayInput);
        highlightBlock("${block.id}");
      }


  `;
  return code;
};

Blockly.Blocks['add_check_button'] = {
  init: function () {
    this.appendDummyInput().appendField('Add Check Button');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['add_check_button'] = function (block) {
  var code = `
    highlightBlock("${block.id}");
    $('#submit').show();
    $('.appContainer #submit').off('click').on('click', function (e) {
      try {
        binarySearch()
      }catch{}
  })

  `;
  return code;
};

Blockly.Blocks['binary_search'] = {
  init: function () {
    this.appendDummyInput().appendField('∱: Binary Search');
    this.appendDummyInput().appendField('(Called when "Check" button is clicked)');
    this.appendStatementInput('function_body').setCheck(null);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['binary_search'] = function (block) {
  var statements_function_body = Blockly.JavaScript.statementToCode(block, 'function_body');

  var code = `
    function binarySearch(){

      highlightBlock("${block.id}");

      $('#output').show();
      start=0;
      end=arr.length-1;
      ${statements_function_body};
      
    }
   
  `;
  return code;
};

Blockly.Blocks['repeat_until'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Repeat Until')
      .appendField(new Blockly.FieldLabel('start', 'customLabel'))
      .appendField('<=')
      .appendField(new Blockly.FieldLabel('end', 'customLabel'));

    this.appendStatementInput('function_body').setCheck(null).appendField('Do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['repeat_until'] = function (block) {
  if (!this.getSurroundParent()) return '';
  if (this.getSurroundParent() && this.getSurroundParent().type !== 'binary_search') return '';
  if (this.getParent() && this.getParent().type !== 'binary_search') return '';

  var statements_function_body = Blockly.JavaScript.statementToCode(block, 'function_body');
  if (!statements_function_body || statements_function_body.length === 0) return '';
  var code = `

    while(start <= end){
      highlightBlock("${block.id}");
      ${statements_function_body}
    }   
    
   
  `;
  return code;
};

Blockly.Blocks['calculate_mid'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Set')
      .appendField(new Blockly.FieldLabel('mid', 'customLabel'))
      .appendField('=')
      .appendField('(')
      .appendField(new Blockly.FieldLabel('start', 'customLabel'))
      .appendField('+')
      .appendField(new Blockly.FieldLabel('end', 'customLabel'))
      .appendField(')')
      .appendField('/ 2');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['calculate_mid'] = function (block) {
  if (!this.getSurroundParent()) return '';
  if (this.getSurroundParent() && this.getSurroundParent().type !== 'repeat_until') return '';
  if (this.getParent() && this.getParent().type !== 'repeat_until') return '';
  var code = `
    highlightBlock("${block.id}");
    mid = Math.floor((start+end)/2);
    
  `;
  return code;
};

Blockly.Blocks['if_condition'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('If')
      .appendField(new Blockly.FieldLabel('arr[mid]', 'customLabel'))
      .appendField('==')
      .appendField(new Blockly.FieldLabel(' Key ', 'customLabel'));
    this.appendStatementInput('equalStatement').setCheck(null).appendField('Do');
    this.appendDummyInput()
      .appendField('Else if')
      .appendField(new Blockly.FieldLabel('arr[mid]', 'customLabel'))
      .appendField('<')
      .appendField(new Blockly.FieldLabel(' Key ', 'customLabel'));
    this.appendStatementInput('lessStatement').setCheck(null).appendField('Do');
    this.appendDummyInput()
      .appendField('Else if')
      .appendField(new Blockly.FieldLabel('arr[mid]', 'customLabel'))
      .appendField('>')
      .appendField(new Blockly.FieldLabel(' Key ', 'customLabel'));
    this.appendStatementInput('greaterStatement').setCheck(null).appendField('Do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
  },
};

Blockly.JavaScript['if_condition'] = function (block) {
  if (!this.getSurroundParent()) return '';
  if (this.getSurroundParent() && this.getSurroundParent().type !== 'repeat_until') return '';
  if (this.getParent() && this.getParent().type !== 'calculate_mid') return '';
  var equalStatement = Blockly.JavaScript.statementToCode(block, 'equalStatement');
  var lessStatement = Blockly.JavaScript.statementToCode(block, 'lessStatement');
  var greaterStatement = Blockly.JavaScript.statementToCode(block, 'greaterStatement');

  var code = `
  if(arr[mid] == document.getElementById('keyInput').value){
    highlightBlock("${block.id}");
    ${equalStatement};
    
    
   
    
    
  }else if(arr[mid] < document.getElementById('keyInput').value){
    highlightBlock("${block.id}");
    ${lessStatement};
    
    
    
  }else if(arr[mid] > document.getElementById('keyInput').value){
    highlightBlock("${block.id}");
    ${greaterStatement};
    
    
    
  }
  `;
  return code;
};

Blockly.Blocks['element_found'] = {
  init: function () {
    this.appendDummyInput().appendField('Print "Element Found"');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['element_found'] = function (block) {
  var code = `
    highlightBlock("${block.id}");
    $('#output').html("Element Found at Index " + mid );
    break;
    `;
  return code;
};

Blockly.Blocks['element_not_found'] = {
  init: function () {
    this.appendDummyInput().appendField('Print "Element Not Found"');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
  },
};

Blockly.JavaScript['element_not_found'] = function (block) {
  // if (!block.getParent()) return '';
  var code = `
   
    if(start>end){
      highlightBlock("${block.id}");
      $('#output').html("Element Not Found");
    }
    
    
    
    
  `;
  return code;
};

Blockly.Blocks['update_start_end'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Set')
      .appendField(
        new Blockly.FieldDropdown([
          ['start = mid + 1', 'start = mid + 1'],
          ['end = mid - 1', 'end = mid - 1'],
        ]),
        'value1',
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
  },
};

Blockly.JavaScript['update_start_end'] = function (block) {
  var dropdown_value1 = block.getFieldValue('value1');
  // if (!block.getParent()) return '';
  var value = block.getFieldValue('value1');

  var code = `
    highlightBlock("${block.id}");
    if("${dropdown_value1}" === "start = mid + 1") {
      
      start=mid+1; 
    }
    else{
      
      end=mid-1;  
    }
    
  `;
  return code;
};



function runCode() {
  deleteVariables();
  clear();
  showArenaView();
  executeWorkspaceCode();
  redraw();
}

function onArenaUnmount() {
  deleteVariables();
  clear();
}
