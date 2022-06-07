function redraw() {}

function clear() {
  $('.appContainer').hide();
  $('#title').hide();
  $('.keyboard').hide();
  $('.label').hide();
  $('#key').hide();
  $('#submit').hide();
  $('#addArray').hide();
 
  $('#output').hide();
  $('.inputBox').hide();

  $('#keyInput').val('');
  $('#sizeInput').val('');
  $('#arrayInput').val('');
}

function isBlockInParentWithinStatementName(child, parent, name) {
  const blocksInParent = workspace
    ?.getBlocksByType(parent)[0]
    ?.getInputTargetBlock(name)
    ?.getDescendants();
  if (blocksInParent) for (var { type } of blocksInParent) if (type === child) return true;

  return false;
}

function calculateScore() {
  // suggestion(message);
  var score1 = calculateScoreByCount([
    {
      type: 'add_background',
      count: 1,
    },
    {
      type: 'add_title',
      count: 1,
    },
    {
      type: 'add_keyboard',
      count: 1,
    },
    {
      type: 'create_var',
      count: 2,
    },
    {
      type: 'add_check_button',
      count: 1,
    },
    {
      type: 'add_array_button',
      count: 1,
    },
    {
      type: 'create_currentValue',
      count: 1,
    },
    {
      type: 'create_var1',
      count: 3,
    },
    {
      type: 'read_input',
      count: 1,
    },
    {
      type: 'set_variables_condition',
      count: 1,
    },
    {
      type: 'set_value',
      count: 2,
    },
    {
      type: 'func_set_inputs',
      count: 1,
    },
    {
      type: 'set',
      count: 1,
    },
    {
      type: 'binary_search',
      count: 1,
    },
    {
      type: 'repeat_until',
      count: 1,
    },
    {
      type: 'calculate_mid',
      count: 1,
    },
    {
      type: 'if_condition',
      count: 1,
    },
    {
      type: 'element_found',
      count: 1,
    },
    {
      type: 'update_start_end',
      count: 2,
    },
    {
      type: 'element_not_found',
      count: 1,
    },
  ]);


  var score2 = 0;
  var validations = 25;
  var unit = getCompetitionMaxScore() / validations;
  var message = null;

  if (isBlockUsed('add_background')) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(message, 'You have not added a background');
  }

  if (isBlockUsed('add_title')) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not added the title "Binary Search"',
    );
  }

  if (isBlockUsed('add_keyboard')) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(message, 'You have not added Keyboard to the UI.');
  }

  var variables = ['inputArray', 'key'];
  ['arrayInput', 'keyInput'].forEach((variable, i) => {
    if (hasBlockSelectionValue('create_var', `${variable}`)) {
      score2 += unit;
    } else {
      message = getSuggestionPriorityMessage(
        message,
        `You have not created the variable "${variables[i]}".`,
      );
    }
  });

  if (isBlockUsed('add_check_button')) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(message, 'You have not added Check Button to the UI.');
  }

  if (isBlockUsed('add_array_button')) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(message, 'You have not added Array Button to the UI.');
  }

  if (isBlockUsed('create_currentValue')) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not created the variable "currentValue"',
    );
  }

  var variables = ['start', 'mid', 'end'];
  ['start', 'mid', 'end'].forEach((variable, i) => {
    if (hasBlockSelectionValue('create_var1', `${variable}`)) {
      score2 += unit;
    } else {
      message = getSuggestionPriorityMessage(
        message,
        `You have not created the variable "${variables[i]}".`,
      );
    }
  });

  if (isBlockUsed('read_input')) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not defined the function, "∱: Read Input"',
    );
  }

  if (isBlockUsedInParent('set_variables_condition', 'read_input')) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not used condition block inside the function, "∱: Read Input"',
    );
  }

  if (
    isBlockInParentWithinStatementName('set_value', 'set_variables_condition', 'inputStatement') &&
    hasBlockSelectionValue('set_value', 'arrayInput')
  ) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not used "Set current value = inputArray" block correctly in If condition block inside the function, "∱: Read input values"',
    );
  }

  if (
    isBlockInParentWithinStatementName(
      'set_value',
      'set_variables_condition',
      'keyStatement',
    ) &&
    hasBlockSelectionValue('set_value', 'keyInput')
  ) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not used "Set current value = key" block correctly in Else If condition block inside the function, "∱: Read input values"',
    );
  }
  
  if (isBlockUsed('func_set_inputs')) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not defined the function, "∱: Set provided variables"',
    );
  }

  if (isBlockUsedInParent('set', 'func_set_inputs')) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not used "Add Clicked Letter to currentValue" block inside the function, "∱: Set provided variables"',
    );
  }

  if (isBlockUsed('binary_search')) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not defined the function, "∱: Binary Search"',
    );
  }

  if (isBlockUsedInParent('repeat_until', 'binary_search')) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not used "Repeat Until" block inside the function, "∱: Binary Search"',
    );
  }

  if (isBlockUsedInParent('calculate_mid', 'repeat_until') && isBlockInsideGrandBlock('calculate_mid', 'binary_search') ) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not used "Set mid = start + end / 2" block inside the "Repeat Until" block and inside function, "∱: Binary Search"',
    );
  }

  // if (isBlockInsideGrandBlock('calculate_mid', 'binary_search')) {
  //   score2 += unit;
  // } else {
  //   message = getSuggestionPriorityMessage(
  //     message,
  //     'You have not used "Calculate Mid Value" block inside the function, "∱: Binary Search"',
  //   );
  // }

  if (isBlockInsideGrandBlock('if_condition', 'repeat_until')) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not used condition block inside the "Repeat Until" block',
    );
  }

  // if (isBlockUsedInParent('element_found', 'if_condition')) {
  //   score2 += unit;
  // } else {
  //   message = getSuggestionPriorityMessage(
  //     message,
  //     'You have not used "Print "Element Found"" block correctly in If condition block inside "Repeat Until" block',
  //   );
  // }

  if (
    isBlockInParentWithinStatementName('element_found', 'if_condition', 'equalStatement')
  ) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not used "Print "Element Found"" block correctly in If condition block inside the function, "∱: Binary Search"',
    );
  }

  if (
    isBlockInParentWithinStatementName('update_start_end', 'if_condition', 'lessStatement') &&
    hasBlockSelectionValue('update_start_end', 'start = mid + 1')
  ) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not used "Set start = mid + 1" block correctly in Else If condition block inside the function, "∱: Binary Search"',
    );
  }

  if (
    isBlockInParentWithinStatementName('update_start_end', 'if_condition', 'greaterStatement') &&
    hasBlockSelectionValue('update_start_end', 'end = mid - 1')
  ) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not used "Set end = mid - 1" block correctly in ELse If condition block inside the function, "∱: Binary Search"',
    );
  }

  if (isBlockInsideGrandBlock('element_not_found', 'binary_search')) {
    score2 += unit;
  } else {
    message = getSuggestionPriorityMessage(
      message,
      'You have not used "Print "Element Not Found"" block inside the function, "∱: Binary Search"',
    );
  }

  console.log(score1, score2, message);
  suggestion(message);

  return Math.min(score1, score2);






  


}
