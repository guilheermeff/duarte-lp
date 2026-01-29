"use client";

import { useState } from "react";
import Link from "next/link";
import { Instagram, MessageCircle, MapPin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { LocationModal } from "./location-modal";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface ContactButtonGroupProps {
  instagramUrl: string;
  whatsappUrl: string;
  emailUrl: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export function ContactButtonGroup({
  instagramUrl,
  whatsappUrl,
  emailUrl,
  address,
  coordinates,
}: ContactButtonGroupProps) {
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Button Group */}
      <div className="hidden md:block">
        <ButtonGroup aria-label="Opções de contato" className="shadow-sm">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-r-none border-r-0 bg-transparent"
          >
            <Link href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 mr-2" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-none border-r-0 bg-transparent"
          >
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5 mr-2" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => setLocationModalOpen(true)}
            className="rounded-l-none"
          >
            <MapPin className="h-5 w-5 mr-2" />
          </Button>
        </ButtonGroup>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              className="w-full bg-transparent"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-auto">
            <SheetHeader>
              <SheetTitle>Entre em Contato</SheetTitle>
              <SheetDescription>
                Escolha a melhor forma de nos contatar
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-3 py-6">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full justify-start bg-transparent"
              >
                <Link
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5 mr-3" />
                  Instagram
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full justify-start bg-transparent"
              >
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 mr-3" />
                  WhatsApp
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setLocationModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-start bg-transparent"
              >
                <MapPin className="h-5 w-5 mr-3" />
                Localização
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <LocationModal
        open={locationModalOpen}
        onOpenChange={setLocationModalOpen}
        address={address}
        coordinates={coordinates}
      />
    </>
  );
}
