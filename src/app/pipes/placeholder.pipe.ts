import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'placeholder'
})
export class placeholderPipe implements PipeTransform{
    transform(value: string, defecto:string):string{
        return (value) ? value:defecto;
    }
}

