using System;
using System.Collections.Generic;

namespace AngularTicketsApp
{
    public partial class AirlineCompany
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NameEn { get; set; }
        public string IcaoCode { get; set; }
        public string IataCode { get; set; }
        public string RfCode { get; set; }
        public string Country { get; set; }
    }
}
