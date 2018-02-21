using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pla5.Models
{
    public class Payee
    {
        public int? ID { get; set; }
        public decimal? Balance { get; set; }
        public int? DefaultAcct { get; set; }
        public decimal? DefaultAmt { get; set; }
        public int? DefaultCat { get; set; }
        public string Name { get; set; }
        public string User { get; set; }
    }  //class
}  //namespace
