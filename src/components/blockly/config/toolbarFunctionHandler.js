import { javascriptGenerator } from 'blockly/javascript';

export const toolbarFunctionHandler = () => {
    // /takeoff
    javascriptGenerator.forBlock['takeoff'] = function() {
        const take_off_after_seconds = 1;
        return `droneTakeOff(${take_off_after_seconds});`;
    }
    
    //takeoff_after_seconds
    javascriptGenerator.forBlock['takeoff_after_seconds'] = function(block) {
        const take_off_after_seconds = block.getFieldValue('SECONDS')
        return `droneTakeOff(${take_off_after_seconds});`;
    }      

    //set_speed






}

