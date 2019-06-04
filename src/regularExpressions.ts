export const lineHasPipe = new RegExp(/[{]([^}\n]+)\|\s+\w+$/);

export const isInMoustaches = new RegExp(/[{]([^}]+)$/g);
/* regex test data

Following line should not match
{{ sc_endeditframe }}

Following line should match:
{{ sc_endeditframe  

*/
export const stripFunctionNameFromLine = new RegExp(/(\w*\.)(\w*)$/g); // linePrefix.replace(stripFunctionNameFromLine,"$1");

export const isInFunctionCompletion = new RegExp(/(\w*\.\w*)$/g);
/* regex test data

    array.r
*/

export const codeBlockFromTemplate  = new RegExp(/(\$[{]*\d+[:|]*)([\w\s-\.]*)([,\w\s|]*)([}]*)/g);
/* regex test data

    sc_field ${1|item,datasource,page,site|} '${2:FieldName}'
    sc_field ${1|item,datasource,page,site|} '${2:FieldName}' [['${3:data-attribute1}','${4:value1}'],['${5:data-attribute2}','${6:value2}']]
    {{ sc_editframe ${1|item,datasource,page,site|} '${2:FrameName}' }},
    $3,
    {{ sc_endeditframe }}
*/

