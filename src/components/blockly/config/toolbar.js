import { toolbarFunctionHandler } from './toolbarFunctionHandler.js'
toolbarFunctionHandler();

export const toolbarConfig = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Takeoff",
      colour: 230,
      contents: [
        {
          kind: "block",
          type: "takeoff"
        },
        {
          kind: "block",
          type: "takeoff_after_seconds"
        }
      ]
    },
    {
      kind: "category",
      name: "Navigation",
      colour: 230,
      contents: [
        {
          kind: "block",
          type: "set_speed"
        },
        {
          kind: "block",
          type: "wait"
        },
        {
          kind: "block",
          type: "flying_forward_distance"
        },
        {
          kind: "block",
          type: "flying_forward_time"
        },
        {
          kind: "block",
          type: "flying_backward_distance"
        },
        {
          kind: "block",
          type: "flying_backward_time"
        },
        {
          kind: "block",
          type: "flying_left_distance"
        },
        {
          kind: "block",
          type: "flying_left_time"
        },
        {
          kind: "block",
          type: "flying_right_distance"
        },
        {
          kind: "block",
          type: "flying_right_time"
        },
        {
          kind: "block",
          type: "flying_up_distance"
        },
        {
          kind: "block",
          type: "flying_up_time"
        },
        {
          kind: "block",
          type: "flying_down_distance"
        },
        {
          kind: "block",
          type: "flying_down_time"
        },
        {
          kind: "block",
          type: "fly"
        },
        {
          kind: "block",
          type: "arc_left"
        },
        {
          kind: "block",
          type: "arc_right"
        },
        {
          kind: "block",
          type: "circle_left"
        },
        {
          kind: "block",
          type: "circle_right"
        },
        {
          kind: "block",
          type: "yaw_left"
        },
        {
          kind: "block",
          type: "yaw_right"
        }
      ]
    },
    {
      kind: "category",
      name: "Land",
      colour: 230,
      contents: [
        {
          kind: "block",
          type: "land"
        },
        {
          kind: "block",
          type: "land_for_seconds"
        }
      ]
    },
    {
      kind: "sep"
    },
    {
      kind: "category",
      name: "Logic",
      contents: [
        {
          kind: "block",
          type: "controls_if"
        },
        {
          kind: "block",
          type: "logic_compare",
          fields: {
            OP: "EQ"
          }
        },
        {
          kind: "block",
          type: "logic_operation",
          fields: {
            OP: "AND"
          }
        },
        {
          kind: "block",
          type: "logic_negate"
        },
        {
          kind: "block",
          type: "logic_boolean",
          fields: {
            BOOL: "TRUE"
          }
        }
      ]
    },
    {
      kind: "category",
      name: "Loops",
      categorystyle: "loop_category",
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext",
          inputs: {
            TIMES: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: 10
                }
              }
            }
          }
        },
        {
          kind: "block",
          type: "controls_whileUntil",
          fields: {
            MODE: "WHILE"
          }
        }
      ]
    },
    {
      kind: "category",
      name: "Math",
      categorystyle: "math_category",
      contents: [
        {
          kind: "block",
          type: "math_number",
          fields: {
            NUM: 123
          }
        },
        {
          kind: "block",
          type: "math_arithmetic",
          fields: {
            OP: "ADD"
          },
          inputs: {
            A: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: 1
                }
              }
            },
            B: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: 1
                }
              }
            }
          }
        },
        {
          kind: "block",
          type: "math_single",
          fields: {
            OP: "ROOT"
          },
          inputs: {
            NUM: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: 9
                }
              }
            }
          }
        },
        {
          kind: "block",
          type: "math_trig",
          fields: {
            OP: "SIN"
          },
          inputs: {
            NUM: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: 45
                }
              }
            }
          }
        },
        {
          kind: "block",
          type: "math_constant",
          fields: {
            CONSTANT: "PI"
          }
        },
        {
          kind: "block",
          type: "math_number_property",
          fields: {
            PROPERTY: "EVEN"
          },
          inputs: {
            NUMBER_TO_CHECK: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: 0
                }
              }
            }
          }
        },
        {
          kind: "block",
          type: "math_round",
          fields: {
            OP: "ROUND"
          },
          inputs: {
            NUM: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: 3.1
                }
              }
            }
          }
        },
        {
          kind: "block",
          type: "math_on_list",
          fields: {
            OP: "SUM"
          }
        },
        {
          kind: "block",
          type: "math_modulo",
          inputs: {
            DIVIDEND: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: 64
                }
              }
            },
            DIVISOR: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: 10
                }
              }
            }
          }
        },
        {
          kind: "block",
          type: "math_constrain",
          inputs: {
            VALUE: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: 50
                }
              }
            },
            LOW: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: 1
                }
              }
            },
            HIGH: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: 100
                }
              }
            }
          }
        },
        {
          kind: "block",
          type: "math_random_int",
          inputs: {
            FROM: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: 1
                }
              }
            },
            TO: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: 100
                }
              }
            }
          }
        },
        {
          kind: "block",
          type: "math_random_float"
        }
      ]
    },
    {
      kind: "category",
      name: "Text",
      categorystyle: "text_category",
      contents: [
        {
          kind: "block",
          type: "text",
          fields: {
            TEXT: ""
          }
        },
        {
          kind: "block",
          type: "text_length"
        },
        {
          kind: "block",
          type: "text_print"
        }
      ]
    },
    {
      kind: "category",
      name: "Lists",
      categorystyle: "list_category",
      contents: [
        {
          kind: "block",
          type: "lists_create_with"
        },
        {
          kind: "block",
          type: "lists_create_with"
        },
        {
          kind: "block",
          type: "lists_repeat",
          inputs: {
            NUM: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: 5
                }
              }
            }
          }
        },
        {
          kind: "block",
          type: "lists_length"
        },
        {
          kind: "block",
          type: "lists_isEmpty"
        },
        {
          kind: "block",
          type: "lists_indexOf",
          fields: {
            END: "FIRST"
          },
          inputs: {
            VALUE: {
              block: {
                kind: "block",
                type: "variables_get",
                fields: {
                  VAR: {
                    name: "list"
                  },
                },
              },
            },
          },
        },
        {
          type: 'lists_split',
          kind: 'block',
          fields: {
            MODE: 'SPLIT',
          },
          inputs: {
            DELIM: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: ',',
                },
              },
            },
          },
        },
        {
          type: 'lists_sort',
          kind: 'block',
          fields: {
            TYPE: 'NUMERIC',
            DIRECTION: '1',
          },
        }
      ],
    },
    {
      kind: 'sep',
    },
    {
      kind: 'category',
      name: 'Variables',
      custom: 'VARIABLE',
      categorystyle: 'variable_category',
    },
    {
      kind: 'category',
      name: 'Functions',
      custom: 'PROCEDURE',
      categorystyle: 'procedure_category',
    },
  ]
};

export const toolbarBlocksDefinitions = (Blockly) => {
  Blockly.Blocks['takeoff'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Take off");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to take off");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['takeoff_after_seconds'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Take off after")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to take off after a specific number of seconds");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['set_speed'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("set speed")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("cm/s");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set drone speed");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['wait'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("wait")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_forward_distance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Flying forward");
      
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT");
      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_forward_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("flying_forward")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };


  Blockly.Blocks['flying_backward_distance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fly backward");
      
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT");
      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_backward_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("flying_backward")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_left_distance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fly left");
      
      // Numeric input field for specifying the distance
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT");
      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_left_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("flying_left")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_right_distance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fly right");
      
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT");
      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_right_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("flying_right")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_up_distance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fly up");
      
      // Numeric input field for specifying the distance
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT");
      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_up_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("flying_up")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_down_distance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fly down");
      
      // Numeric input field for specifying the distance
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT");
      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['flying_down_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("flying_down")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['fly'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("fly x")
          .appendField(new Blockly.FieldNumber(0, 0, null), "x")
          .appendField("y")
          .appendField(new Blockly.FieldNumber(0, 0, null), "y")
          .appendField("z")
          .appendField(new Blockly.FieldNumber(0, 0, null), "z");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['arc_left'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("arc left");
      
      // Numeric input field for specifying the distance
      this.appendValueInput("DEGREE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DEGREE")
          .appendField(" degrees with") 
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "Distance")
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT")
          .appendField("radius");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['arc_right'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("arc right");
      
      // Numeric input field for specifying the distance
      this.appendValueInput("DEGREE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DEGREE")
          .appendField(" degrees with") 
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "Distance")
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT")
          .appendField("radius");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['circle_left'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Circle left with");
      
      // Numeric input field for specifying the distance
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT")
          .appendField("radius");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['circle_right'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Circle right with");
      
      // Numeric input field for specifying the distance
      this.appendValueInput("DISTANCE")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "DISTANCE")      
          .appendField(new Blockly.FieldDropdown([["inches", "INCHES"], ["cm", "CM"]]), "UNIT")
          .appendField("radius");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to fly forward a certain distance in inches or cm");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['yaw_left'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("yaw left")
          this.appendValueInput("degreee")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "degrees")  
          .appendField("degree");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['yaw_right'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("yaw right")
          this.appendValueInput("degreee")
          .setCheck("Number")
          .appendField(new Blockly.FieldNumber(0, 0, null), "degrees")  
          .appendField("degree");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to set wait time for drone");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['land'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("land");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to take off");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['land_for_seconds'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Land for")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "SECONDS")
          .appendField("seconds then takeoff");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command to take off after a specific number of seconds");
      this.setHelpUrl("");
    }
  };
};
