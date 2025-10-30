"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  User,
  Phone,
  Mail,
  MapPin,
  Plus,
  Filter,
  Search,
  Download,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";

const appointments = [
  {
    id: 1,
    client: "Dr. Sarah Johnson",
    service: "Botox Consultation",
    date: "2024-01-15",
    time: "10:00 AM",
    duration: "60 min",
    status: "confirmed",
    phone: "+1 (555) 123-4567",
    email: "sarah@luxeaesthetics.com",
    location: "Main Clinic",
    notes: "First-time client, interested in Botox for forehead lines",
    value: "$2,400"
  },
  {
    id: 2,
    client: "Maria Rodriguez",
    service: "Dermal Fillers",
    date: "2024-01-15",
    time: "2:00 PM",
    duration: "90 min",
    status: "confirmed",
    phone: "+1 (555) 987-6543",
    email: "maria@elitemedspa.com",
    location: "Main Clinic",
    notes: "Returning client, wants lip enhancement",
    value: "$1,800"
  },
  {
    id: 3,
    client: "Dr. Michael Chen",
    service: "Laser Treatment",
    date: "2024-01-16",
    time: "9:00 AM",
    duration: "45 min",
    status: "pending",
    phone: "+1 (555) 456-7890",
    email: "michael@premiumaesthetics.com",
    location: "Main Clinic",
    notes: "Follow-up treatment, needs confirmation",
    value: "$3,200"
  },
  {
    id: 4,
    client: "Jennifer Martinez",
    service: "Chemical Peel",
    date: "2024-01-16",
    time: "3:30 PM",
    duration: "75 min",
    status: "completed",
    phone: "+1 (555) 321-9876",
    email: "jennifer@beautyspa.com",
    location: "Main Clinic",
    notes: "Completed successfully, client very satisfied",
    value: "$1,200"
  }
];

const statusColors = {
  confirmed: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  completed: "bg-blue-100 text-blue-800",
  cancelled: "bg-red-100 text-red-800"
};

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState("2024-01-15");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAppointments = appointments.filter(appointment => {
    const matchesStatus = filterStatus === "all" || appointment.status === filterStatus;
    const matchesSearch = appointment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.service.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const totalRevenue = appointments.reduce((sum, appointment) => sum + parseInt(appointment.value.replace('$', '').replace(',', '')), 0);

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-4xl font-light text-charcoal-950 mb-2">
              Appointment Schedule
            </h1>
            <p className="text-xl text-graphite-700 font-light">
              Manage your client appointments and daily schedule
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-charcoal-900" />
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-charcoal-950">Today's Revenue</p>
              <p className="text-xs text-gold-600">${totalRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-charcoal-900" />
            </div>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">24</h3>
          <p className="text-sm text-graphite-700 font-light">This Week</p>
          <p className="text-xs text-green-600 mt-1">+3 from last week</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-charcoal rounded-xl flex items-center justify-center shadow-lg">
              <Clock className="w-6 h-6 text-gold-400" />
            </div>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">8</h3>
          <p className="text-sm text-graphite-700 font-light">Today</p>
          <p className="text-xs text-green-600 mt-1">All confirmed</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <User className="w-6 h-6 text-charcoal-900" />
            </div>
            <AlertCircle className="w-5 h-5 text-yellow-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">3</h3>
          <p className="text-sm text-graphite-700 font-light">Pending</p>
          <p className="text-xs text-yellow-600 mt-1">Need confirmation</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 text-charcoal-900" />
            </div>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">18</h3>
          <p className="text-sm text-graphite-700 font-light">Completed</p>
          <p className="text-xs text-green-600 mt-1">This week</p>
        </div>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="ultra-luxury-card rounded-2xl p-6 luxury-glow"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-graphite-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search appointments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gold-200 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gold-200 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950"
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-gold-200 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950"
            />
          </div>
          <div className="flex items-center space-x-3">
            <Button className="btn-gold luxury-button">
              <Plus className="w-4 h-4 mr-2" />
              New Appointment
            </Button>
            <Button variant="outline" className="btn-outline-gold">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Appointments List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="ultra-luxury-card rounded-2xl p-8 luxury-glow"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold-200">
                <th className="text-left py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Client
                </th>
                <th className="text-left py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Service
                </th>
                <th className="text-left py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Date & Time
                </th>
                <th className="text-left py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Duration
                </th>
                <th className="text-right py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Value
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Status
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id} className="border-b border-champagne-100 hover:bg-champagne-50 transition-colors duration-300">
                  <td className="py-4 px-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-charcoal-900 font-medium text-sm">
                          {appointment.client.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-charcoal-950">{appointment.client}</div>
                        <div className="text-sm text-graphite-600">{appointment.phone}</div>
                        <div className="text-sm text-graphite-600">{appointment.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="text-sm text-charcoal-950 font-medium">{appointment.service}</div>
                    <div className="text-sm text-graphite-600">{appointment.location}</div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="text-sm text-charcoal-950 font-medium">{appointment.date}</div>
                    <div className="text-sm text-graphite-600">{appointment.time}</div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="text-sm text-charcoal-950">{appointment.duration}</div>
                  </td>
                  <td className="py-4 px-2 text-right font-medium text-charcoal-950">
                    {appointment.value}
                  </td>
                  <td className="py-4 px-2 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusColors[appointment.status as keyof typeof statusColors]}`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <Button size="sm" variant="ghost" className="text-gold-600 hover:text-gold-700">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gold-600 hover:text-gold-700">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

