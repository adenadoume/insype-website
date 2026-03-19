import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { insypeAPI } from '../lib/supabase'

export const useSettings = () => {
  return useQuery({
    queryKey: ['settings'],
    queryFn: insypeAPI.getSettings,
    staleTime: 10 * 60 * 1000,
  })
}

export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: insypeAPI.getServices,
    staleTime: 5 * 60 * 1000,
  })
}

export const useService = (slug) => {
  return useQuery({
    queryKey: ['service', slug],
    queryFn: () => insypeAPI.getService(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  })
}

export const useCaseTypes = () => {
  return useQuery({
    queryKey: ['case-types'],
    queryFn: insypeAPI.getCaseTypes,
    staleTime: 5 * 60 * 1000,
  })
}

export const usePersonnel = () => {
  return useQuery({
    queryKey: ['personnel'],
    queryFn: insypeAPI.getPersonnel,
    staleTime: 5 * 60 * 1000,
  })
}

export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: insypeAPI.getTestimonials,
    staleTime: 5 * 60 * 1000,
  })
}

export const useGalleryImages = (categorySlug) => {
  return useQuery({
    queryKey: ['gallery-images', categorySlug],
    queryFn: () => insypeAPI.getGalleryImages(categorySlug),
    staleTime: 5 * 60 * 1000,
  })
}

export const useGalleryCategories = () => {
  return useQuery({
    queryKey: ['gallery-categories'],
    queryFn: insypeAPI.getGalleryCategories,
    staleTime: 10 * 60 * 1000,
  })
}

export const usePageContent = (pageName) => {
  return useQuery({
    queryKey: ['page-content', pageName],
    queryFn: () => insypeAPI.getPageContent(pageName),
    enabled: !!pageName,
    staleTime: 5 * 60 * 1000,
  })
}

export const useText = (key) => {
  return useQuery({
    queryKey: ['text', key],
    queryFn: () => insypeAPI.getText(key),
    enabled: !!key,
    staleTime: 5 * 60 * 1000,
  })
}

export const useContactForm = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: insypeAPI.submitContact,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['contact-messages'] }),
  })
}

export const useNewsletterSubscribe = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: insypeAPI.subscribeNewsletter,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['newsletter-subscribers'] }),
  })
}