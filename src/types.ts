/*---------------------------------------------------------
 * Copyright (C) 2019 - Adam Najmanowicz. All rights reserved.
 *--------------------------------------------------------*/

export interface ScribanSnippet {
    name: string;
    description: string;
    validationRegEx: string;
    template: string | string[];
    pipeTemplate: string;
}
