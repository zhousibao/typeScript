export class export_1 {
  isAcceptable(s: string) {
      return s.length === 5 && parseInt(s).toString() === s;
  }
}


export const export_2 = /^[0-9]+$/;